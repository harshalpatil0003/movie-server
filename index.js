
import dotenv from 'dotenv';
import express from 'express';
dotenv.config()
import mongoose from 'mongoose';
import cors from 'cors'


import { gethealth } from './controllers/health.js'
import {
    postmovie,
    getmovie,
    getmovieid,
    putmovieid,
    deletemovie
} from './controllers/movies.js';
import { error } from './controllers/error.js';

const app = express()
app.use(cors())
app.use(express.json())

const dbconnection = async () => {
    const connect = await mongoose.connect(process.env.Mongo_URL)
    if(connect){
    console.log("Mongodb Connected")
    }
    else{
        console.log("Mongodb Not Connected")
    }
}
dbconnection();

app.get("/health", gethealth)

app.post("/movie", postmovie)

app.get("/movies", getmovie)

app.get("/movie/:id", getmovieid)

app.put("/movie/:id", putmovieid)

app.delete("/movie/:id", deletemovie)

app.use("*", error)




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})