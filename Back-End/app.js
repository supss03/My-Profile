'use strict'

const express = require('express')
const path = require('path')

const app = express()

// Serve static files (index.html, index.css, etc.) from the Front-End folder
app.use(express.static(path.join(__dirname, '../Front-End')))

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-End/index.html'))
})

// Set up the port for App Engine (or localhost for local development)
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})