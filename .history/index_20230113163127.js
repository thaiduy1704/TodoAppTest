import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {rootRouter} from './router/index.js'

const app = express()

app.use(morgan('tiny')) //Easy for debug
app.use(express.json());
dotenv.config()
mongoose.set('strictQuery', false);


app.use('/api',rootRouter)
// app.get('/', (req, res) => res.send('Hello World!'))
 
mongoose
            . connect(process.env.MONGODB_URL , {useNewUrlParser:true})
            .then(()=>{

                app.listen(process.env.PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
            })
            .catch (()=>{
                console.error(`Error connect toN ${process.env.MONGODB_URL} `)
            })



//  import express from 'express'
// import dotenv from 'dotenv'
// import morgan from 'morgan'
// import { rootRouter } from './router/index.js'








// dotenv.config()
// const PORT = process.env.PORT || 3000
// const app = express()

// //Middleware
// app.use(morgan('tiny')) //Easy for debug
// app.use(express.json());
// // app.get('/', (req, res) => res.send('Hello World!'))


// //Router
// app.use('/api', rootRouter)


// const start = async () => {
//   app.listen(PORT, console.log(`Server is listening on ${PORT}`))
// }

// start()