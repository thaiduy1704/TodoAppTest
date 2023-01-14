const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const {PORT,MONGODB_URL} = process.env

app.get('/', (req, res) => res.send('Hello World!'))

mongoose
            . connect(MONGODB_URL, {useNewUrlParser:true})
            .then(()=>{

                app.listen(PORT, () => console.log(`Example app listening on port ${port}!`))
            })
            .catch (()=>{
                console.error("Error connect to ")
            })


