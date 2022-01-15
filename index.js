const express = require("express")
const app = express()
const port = 5000
const { dbConnect } = require("./config/db")

const usersRoutes = require("./routes/users")
const tweetsRoutes = require("./routes/tweets")
const commentsRoutes = require("./routes/messages")

dbConnect()

app.use(express.json())

app.use('/users', usersRoutes) 
app.use('/tweets', tweetsRoutes)
app.use('/comments', commentsRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})