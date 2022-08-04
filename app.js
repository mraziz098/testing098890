'use strict'
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(href="https://storage.googleapis.com/flowery-351313/project%20101.html")
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
