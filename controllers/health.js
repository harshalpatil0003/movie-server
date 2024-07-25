const gethealth = (req, res) => {
    res.json({
        success: "true",
        message: "server is running.....test."
    })
}
export {
    gethealth
}