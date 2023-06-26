const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const cors = require("cors")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB conection successfull")).catch(err => console.log(err))

app.use(express.json())
app.use("*", cors())

app.use("/api/auth", authRoute)
app.use("/api/users/", userRoute)
app.use("/api/movies/", movieRoute)

app.listen(8000, () => {
    console.log("Backend server is running")
})