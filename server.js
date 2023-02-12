require('dotenv').config()
const PORT = process.env.PORT
const connectionString = process.env.CONNECTION_STRING
// const db = process.env.db
// const collection = process.env.COLLECTION
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db(process.env.db)
        const countries = db.collection(process.env.COLLECTION)
    })
    .catch(err => console.error(`$error: {err}, line: ${err.lineNumber} `))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))