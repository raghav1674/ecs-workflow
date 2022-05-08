const express = require("express");
const app = express();

app.get('/',(req,res)=>{

    res.status(200).json({ message: 'App Works!'})
})

app.get('/health',(req,res)=>{

    res.status(200).json({message: 'App Works!'})
})

app.get('/hello/:name', (req, res) => {

    res.status(200).json({message:`Hello ${req.params.name}`})

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})



