'use strict'
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.redirect('https://storage.googleapis.com/flowery-351313/Portfolio.html')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
