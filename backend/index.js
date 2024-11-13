const express = require('express')
const cors = require('cors')
const env = require('dotenv')
env.config()

const app = express();
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`)
})