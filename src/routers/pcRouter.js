const express = require('express')
const PC = require("../models/pc_store_Module")

const router = new express.Router()

router.post('/store/new-pc', async (req, res) =>{
    const pc = new PC(req.body)
    try{
        await pc.save();
        res.send(pc);
    }catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message,
        })
    }
})

router.get('/store/find-pc', async (req, res) =>{
    const _id = req.query._id
    try{
        const pc = await PC.findById(_id)
        if(!pc) {
            return res.status(404).send({
                status: 404,
                message: "wrong id"
            })
        }
        res.send(pc)
    }catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/store/remove-pc', async (req, res) => {
    const _id = req.query._id
    try {
        const pc = await PC.findByIdAndDelete(_id)
        if(!pc){
            return res.status(404).send({
                status: 404,
                message: "wrong id"
            })
        }
        res.send(pc)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.patch('/store/edit', async (req, res) =>{
    const _id = req.query._id
    try{
        const pc = await PC.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
        });
        if(!pc){
            return res.status(404).send({
                status: 404,
                message: "wrong id"
            })    
        }
        res.send(pc);
    }catch(err) {
        res.status(400).send({
            status: 400,
            message: err.message
        })
    }
})

module.exports = router