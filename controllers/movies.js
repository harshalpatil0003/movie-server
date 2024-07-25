import Movie from './../models/movie.js'
const movies = []


const postmovie = async (req, res) => {
    const {
        title,
        category,
        director,
        release_date,
        rating,
        description,
        image_url,
        trailer_url,
    } = req.body
    const newmovie = new Movie({
        title: title,
        category: category,
        description: description,
        image_url: image_url,
        trailer_url: trailer_url,
        rating: rating,
        release_date: release_date,
        director: director,

    })
    const savedmovie = await newMovie.save();
    res.json({
        success: true,
        data: newMovie,
        message: 'Movie Added'
    })

}
const getmovie = async (req, res) => {
    const allmovies = await Movie.find()
    res.json({
        message: "All movies fetched successfully",
        success: true,
        data: allmovies
    })
}
const getmovieid = async (req, res) => {
    const { id } = req.params
    const movie = await Plant.findById(id)
    res.json({
        success: movie ? true : false,
        data: movie || null,
        message: movie ? "Movie Fetched Successfully" : "Can't Find Movie"
    })
}
const putmovieid = async (req, res) => {

    const {
        title,
        director,
        release_date,
        rating,
        description,
        image_url,
        trailer_url,
    } = req.body
    const { id } = req.params
    await Movie.updateOne({ _id: id }, {
        $set:
        {
            title: title,
            director:director,
            release_date:release_date,
            rating:rating,
            description:description,
            image_url:image_url,
            trailer_url:trailer_url
        }

    })
    const updatedmovie=await Movie.findById(id)
    res.json({
        success: true,
        message: "Movie Updated Successfully",
        data: updatedmovie
        })
}
const deletemovie = async (req, res) => {
    const { id } = req.params
    
 await Plant.deleteOne({_id:id})
    res.json({
        success: true,
        data: null,
        message: "Movie Deleted"
    })

}

export {
    postmovie,
    getmovie,
    getmovieid,
    putmovieid,
    deletemovie

}