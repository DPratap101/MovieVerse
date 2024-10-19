const express = require("express")
const MovieModel = require("../models/db.model")
const filterMovies = require("../middlewares/filterModel.middleware")

const router = express.Router()


router.get('/', filterMovies, async(req,res)=>{

    const { page = 1, limit = 10 } = req.query


    try{
        const movies = await MovieModel.find(req.filterMovies).limit(limit*1).skip((page-1)*limit).exec() 
        const count = await MovieModel.countDocuments(req.filterMovies)
        res.status(200).json({
            movies,
            count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        })

    }catch(err){
        res.status(500).json({message:err})
    }
})

module.exports = router