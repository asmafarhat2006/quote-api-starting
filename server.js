const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement,getQuotesByPerson } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random',(req,res,next)=>{
   const resObject = {};
   resObject['quote'] = getRandomElement(quotes); 
    return res.send(resObject);
});
app.get('/api/quotes',(req,res,next)=>{
    const resObject = {};
   
    if(req.query.person){
        resObject['quotes'] = getQuotesByPerson(quotes,req.query.person);
    }else{
        resObject['quotes'] = quotes;
   
    }
    return res.send(resObject); 
   
});
app.post('/api/quotes',(req,res,next)=>{
    if(!req.query.person  || !req.query.quote){
        res.status(400).send();
    }
    const newQuote = {quote : req.query.quote,person : req.query.person};
    const resObject = {};
    quotes.push(newQuote);
    resObject['quote'] = newQuote;
    return res.send(resObject); 
   
});
app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`);
});