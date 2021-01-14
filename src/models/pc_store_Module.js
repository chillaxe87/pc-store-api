const mongoose = require('mongoose')
const validator = require('validator')

const pcSchema = new mongoose.Schema({
   brand :{
       type: String,
       trim: true
   },
   cpu_speed: {
       type: String,
       trim: true
   },
   ram_capacity: {
       type: String,
       trim: true
   },
   screen_size: {
       type: Number,
       trim: true,
       validate(value){
        if(value <= 0) {
            throw new Error("Screen size cannot be negative")
        }
    }
   },
   price: {
       type: Number,
       trim: true,
       validate(value){
           if(value <= 0) {
               throw new Error("Price cannot be negative")
           }
       }
    }
}, {
    timestamps: true
})

const PC = mongoose.model('PC', pcSchema);

module.exports = PC