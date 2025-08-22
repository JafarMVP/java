const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())
app.get('/hello',(req,res)=>{
    res.send('Hello from GET!')
})

app.post('/data',(req,res)=>{
    const body = req.body
    res.json({message: 'Data received', yourData: body})
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})

