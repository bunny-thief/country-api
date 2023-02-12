require('dotenv').config()
const PORT = process.env.PORT
const connectionString = process.env.CONNECTION_STRING
// const db = process.env.db
// const collection = process.env.COLLECTION
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const path = require('node:path')

MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database')
        const db = client.db(process.env.db)
        const countries = db.collection(process.env.COLLECTION)

        app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))

        app.get('/api/countries', (req, res) => {
            countries.find().toArray()
                .then(result => res.json(result))
        })
    })
    .catch(err => console.error(`$error: {err}, line: ${err.lineNumber} `))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))