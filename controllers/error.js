const error=(req, res) => {
    return res.send(
        `<div>
        <h1 style="text-align:center;">404 Page Not Found</h1>
        </div>`
    )
}
export{
    error
}