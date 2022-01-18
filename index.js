const express = require("express")
const port = 5000
const { dbConnect } = require("./config/db")
const session = require("express-session")
const passport = require("./config/passport")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/admin")
const usersRoutes = require("./routes/users")
const tweetsRoutes = require("./routes/tweets")
const commentsRoutes = require("./routes/comments")

const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json())

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use('/users', usersRoutes) 
app.use('/tweets', tweetsRoutes)
app.use('/comments', commentsRoutes)

dbConnect()

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})