import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {rootRouter} from './router/index.js'

const app = express()
const port = 3000
app.use(morgan('tiny')) //Easy for debug
app.use(express.json());
dotenv.config()
mongoose.set('strictQuery', false);


app.use('/api'rootRouter)
// app.get('/', (req, res) => res.send('Hello World!'))
 
mongoose
            . connect(process.env.MONGODB_URL , {useNewUrlParser:true})
            .then(()=>{

                app.listen(process.env.PORT, () => console.log(`Example app listening at http://localhost:${port}`))
            })
            .catch (()=>{
                console.error(`Error connect toN ${process.env.MONGODB_URL} `)
            })


