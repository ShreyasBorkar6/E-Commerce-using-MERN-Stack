import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send('THIS is 5000')
})

app.listen(5000,()=>{
    console.log('app is listing on port 5000');
    
})