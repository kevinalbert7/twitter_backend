const { json } = require("express/lib/response")
const passport = require("passport")
const passportLocal = require("passport-local")

const LocalStrategy = passportLocal.Strategy

const User = require("../models/User")

passport.use(new LocalStrategy( async (username, password, done) => {

    try{
        const user = await User.findOne({ username, password }).exec()
    
        if (!user) {
            return done(null, false)
        }
    
        return done(null, user)

    } catch (err) {
        return done(null, false)
    }
}))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id).exec()
    done(null, user)
})

module.exports = passport