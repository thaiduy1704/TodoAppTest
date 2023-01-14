const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))

mongoose
            . connect(process.env.MONGODB_URL , {useNewUrlParser:true})
            .then(()=>{

                app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`))
            })
            .catch (()=>{
                console.error(`Error connect toN ${process.env.MONGODB_URL} `)
            })


