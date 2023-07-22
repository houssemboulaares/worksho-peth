const express = require('express')
const connect= require('./backend/helpers/dbconnect')
const useRoutes= require('./backend/Routes/userRoutes')
const cors=require('cors')
const app = express()
const port = 8000
connect()
app.use(express.json())
app.use(cors())
app.use('/user',useRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))