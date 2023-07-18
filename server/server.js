const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const Document = require('./Document');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/docdb', {
  useNewUrlParser: true,
});

const defaultValue = ""

io.on("connection", socket => {
    socket.on('get-document', async documentID => {
        const document = await findOrCreateDocument(documentID)
        socket.join(documentID)
        socket.emit('load-document', document.data)

    
        socket.on('send-changes', delta => {
            socket.broadcast.to(documentID).emit("receive-changes", delta)
    })

    socket.on('save-document', async data => {
        await Document.findByIdAndUpdate(documentID, { data })
    })
})
    console.log("connected")
})

async function findOrCreateDocument(id) {
    if (id == null) return

    const document = await Document.findById(id)
    if (document) return document
    return await Document.create({_id: id, data: defaultValue})
}

// Serve the static React build
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});