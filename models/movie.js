import { Schema, model } from "mongoose";
const movieschema = new Schema({
    title: String,
    director: String,
    release_date: String,
    rating: Number,
    description: String,
    image_url: String,
    trailer_url: String
},
{
    timestamps:true
})
const Movie = model("Movie", movieschema)
export default Movie;
