
import dotenv from 'dotenv';
import express from 'express';
dotenv.config()
const app = express()
app.use(express.json())

const movies = [
    {
        "id": 5,
        "title": "kalki",
        "director": "Nag AshWin",
        "release_date": "27 June 2024",
        "rating": 7.7,
        "description": "The film focuses on Bhairava, a bounty hunter who harbours ambitions to make it big inside the Complex. The movie features Prabhas, Deepika Padukone, Amitabh Bachchan, Kamal Haasan, Disha Patani, Vijay Devarakonda, Dulquer Salmaan and Mrunal Thakur in key roles.",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIvebrHkQ8i4vi6CvdO0JC2OU5MiuYE8Xmg&s",
        "trailer_url": "https://www.youtube.com/watch?v=kQDd1AhGIHk"
    },
    {
        "id": 2,
        "title": "stree",
        "director": "Nag AshWin",
        "release_date": "27 June 2024",
        "rating": 7.7,
        "description": "The film focuses on Bhairava, a bounty hunter who harbours ambitions to make it big inside the Complex. The movie features Prabhas, Deepika Padukone, Amitabh Bachchan, Kamal Haasan, Disha Patani, Vijay Devarakonda, Dulquer Salmaan and Mrunal Thakur in key roles.",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIvebrHkQ8i4vi6CvdO0JC2OU5MiuYE8Xmg&s",
        "trailer_url": "https://www.youtube.com/watch?v=kQDd1AhGIHk"
    },
    {
        "id": 3,
        "title": "bahubali",
        "director": "Nag AshWin",
        "release_date": "27 June 2024",
        "rating": 7.7,
        "description": "The film focuses on Bhairava, a bounty hunter who harbours ambitions to make it big inside the Complex. The movie features Prabhas, Deepika Padukone, Amitabh Bachchan, Kamal Haasan, Disha Patani, Vijay Devarakonda, Dulquer Salmaan and Mrunal Thakur in key roles.",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIvebrHkQ8i4vi6CvdO0JC2OU5MiuYE8Xmg&s",
        "trailer_url": "https://www.youtube.com/watch?v=kQDd1AhGIHk"
    }

]

app.post("/movie", (req, res) => {
    const {
        title,
        director,
        release_date,
        rating,
        description,
        image_url,
        trailer_url,
    } = req.body
    const movieid = Math.round(Math.random() * 10000)

    const newmovie = {
        id: movieid,
        title: title,
        director: director,
        release_date: release_date,
        rating: rating,
        description: description,
        image_url: image_url,
        trailer_url: trailer_url

    }
    movies.push(newmovie)
    res.json({
        success: true,
        data: newmovie,
        message: 'Movie Added'
    })

})

app.get("/movies", (req, res) => {
    res.json({
        message: "All movies fetched successfully",
        success: true,
        data: movies
    })
})

app.get("/movie/:id", (req, res) => {
    const { id } = req.params
    const movie = movies.find((p) => p.id == id)
    res.json({
        success: movie ? true : false,
        data: movie || null,
        message: movie ? "Movie Fetched Successfully" : "Can't Find Movie"
    })
})

app.put("/movie/:id", (req, res) => {

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

    let index = -1

    movies.forEach((movie, m) => {
        if (movie.id == id) {
            index = m
        }

    })
    const newObj = {
        id,
        title,
        director,
        release_date,
        rating,
        description,
        image_url,
        trailer_url
    }
    if (index == -1) {
        return res.json({
            success: false,
            data: null,
            message: `Movie Not Found For ID ${id}`
        })
    }
    else {
        movies[index] = newObj
        return res.json({
            success: true,
            data: newObj,
            message: "Movie Updated Successfully"
        })

    }
})

app.delete("/movie/:id", (req, res) => {
    const { id } = req.params
    let index = -1
    movies.forEach((movie, m) => {
        if (movie.id == id) {
            index = m
        }
    })
    if (index == -1) {
        return res.json({
            success: true,
            data: null,
            message: `Movie Not Found With ID ${id}`
        })
    }
    movies.splice(index, 1)
    res.json({
        success: true,
        data: null,
        message: "Movie Deleted"
    })

})
app.use("*", (req, res) => {
    return res.send(
        `<div>
        <h1 style="text-align:center;">404 Page Not Found</h1>
        </div>`
    )
})



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})