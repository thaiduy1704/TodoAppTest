import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
const port = 3000
dotenv.config()


app.get('/', (req, res) => res.send('Hello World!'))

mongoose
            . connect(process.env.MONGODB_URL , {useNewUrlParser:true})
            .then(()=>{

                app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`))
            })
            .catch (()=>{
                console.error(`Error connect toN ${process.env.MONGODB_URL} `)
            })


