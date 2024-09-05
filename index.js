import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import connectDB from "./db/conn.js"
import postRoutes from "./routes/postRoute.js"
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT || 3000

connectDB()

const app = express()
app.use(express.json())

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/posts", postRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})