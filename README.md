# Google Docs Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Live App](#live-app)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Questions](#questions)
- [License](#license)
- [Credits](#credits)

## Live App

[Google Docs Clone LIVE](https://google-clone-1willcobb-v3-46671173cb17.herokuapp.com)

[Persisting Example Document](https://google-clone-1willcobb-v3-46671173cb17.herokuapp.com/documents/7012e6b9-92b1-4d68-b751-370045e0404f)

## Description 

This app is a Google Doc like app that the user can write documents with simple text editing tools, auto updating and saving, and have the document persist utilizing MongoDB. The app also allows for multiple users to edit the same document in real time collaboration, just like google docs.

This app utilizes a MERN stack including:

- React.js
- Node.js
- Express.js
- Socket.io
- Quill.js
- MongoDB
- And his packaged and deployed on Heroku


## Installation

To use this app for your own needs, download all the files from github or clone the repo. 

In each folder of the following folders run the following command: google_doc, server, client: 

```
npm install
```

this will install your node_modules. 

VERY IMPORTANT: for running locally, go into the google_doc/client/src/TextEditor.js file and uncomment the local host line in socket io. This needed to be commented out for hosting on Heroku. 

Then in the server folder, start you node server with: 

```node
node server.js
```

and in your client folder, launch the React app using:

```
npm start
```

## Usage

To access the app go [here](https://google-clone-1willcobb-v3-46671173cb17.herokuapp.com) for a fresh document. 

Then type away like you would use any document. Send the URL to a friend and work on the document together. Save the URL to return to it. 

* NOTE: This app currently does not have a way to retrieve the document once it is made, though it does still exist. By copying and pasting, or saving as a bookmark the url, you can return to this document. If not, you will not be able to return. 

## Future Development

Future updates will include user authentication and accounts, document retrieval, and other features.

## Contributions

 I am open contributions for any features! Please reach out.

## Questions
  Please reach out to me if you have any questions about the functionality of the app or installation
  [GitHub](https://github.com/1willcobb)
  [Email](mailto:cobb.will@gmail.com)

## License
[MIT License](https://choosealicense.com/licenses/mit/)

  The license used for this application is MIT License which can be found at the [here](https://choosealicense.com/licenses/mit/)

## Credits

This application refers to quill, react, and heroku tutorials I have taken over my years of study in computer science. 

Thank you to: Web Dev Simplified, Gravity, UC Berkeley Extension Coding Boot Camp
