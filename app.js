'use strict'

const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})