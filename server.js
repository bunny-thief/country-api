require('dotenv').config()
const PORT = process.env.PORT
const connectionString = process.env.CONNECTION_STRING
const db = process.env.db
const collection = process.env.COLLECTION
const express = require('express')
const app = express()

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))