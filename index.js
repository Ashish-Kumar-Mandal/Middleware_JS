const express = require('express');
const app = express();

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("Please enter age.")
    }else if(req.query.age < 18){
        res.send("You can't access this page.")
    }else{
        next();
    }
}
app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('I am home page')
})

app.get('/users', (req, res) => {
    res.send('I am users page')
})

app.listen(4545);