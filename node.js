const express = require("express")
const app = express()

app.get('/', (res,req)=>{
    res.send("working")
})

app.listen(process.env.PORT || 5000)