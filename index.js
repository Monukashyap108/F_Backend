const express = require('express')
const app = express()

require('dotenv').config()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Monu Kashyap')
    
})
 
 app.get('/Login',(req, res)=>{
     res.send('<h1>Pls Login The Page for Acess</h1')
 })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("chai aur code");
