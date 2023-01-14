const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const {PORT,} = process.env

app.get('/', (req, res) => res.send('Hello World!'))

mongoose
            . connect('mongodb://localhost:27017/myapp', {useNewUrlParser:true})
            .then(()=>{

                app.listen(port, () => console.log(`Example app listening on port ${port}!`))
            })
            .catch (()=>{
                console.error("Error connect to ")
            })


