const express = require('express')
const cors = require('cors')

const port = process.env.port
require('./db/mongoose');
const pcRouter = require('./routers/pcRouter')

const app = express();

app.use(express.json());
app.use(cors());
app.use(pcRouter)

app.listen(port, ()=>{
    console.log("Server connected, port:", port)
})