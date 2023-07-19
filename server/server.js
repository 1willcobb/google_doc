const express = require("express");
const mongoose = require("mongoose");
const Document = require("./Document");
const path = require('path');

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/docdb',
  {
    useNewUrlParser: true,
  }
);

const port = process.env.PORT || 3001;
const frontEndURL = process.env.FRONTEND_URL || 'http://localhost:3001'


// Route handler for the root path ("/")
app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

const io = require('socket.io')(port, {
    cors: {
        origin:frontEndURL,
        method: ['GET', 'POST']
    }
})

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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Route handler for the root path ("/") to serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});