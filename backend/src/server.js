const express = require("express")
const dotenv = require("dotenv")
const getRouter = require("./routers/movie.routers")
const connection = require("./config/dbConnection.config")
const createRouter = require("./routers/create.routers")
const updateRouter = require("./routers/update.routers")
const deleteRouter = require("./routers/delete.routers")
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use('/movies', getRouter)
app.use('/movies', createRouter);
app.use('/movies', updateRouter);
app.use('/movies', deleteRouter);

app.use(express.json())

app.listen(PORT, async()=>{
    try{

        await connection
        console.log("db connected successfully")
        console.log(`server listening at http://localhost:${PORT}`)


    }catch(err){
        res.status(500).json({message:err})
    }
})

