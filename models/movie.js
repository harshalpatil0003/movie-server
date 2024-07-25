import { Schema , model } from "mongoose";
const mpovieschema = new Schema({
    name: String,
    category: String,
    Image: String,
    Director: String,
    description: String
})
const Movie = model("Movie", mpovieschema)
export default Movie;
