'use strict'

var express = require('express')
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')
const Alpaca = require('@alpacahq/alpaca-trade-api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',(req,res)=>{
  
})

  const alpaca = new Alpaca({
  keyId: 'PKHK2GUDOL8DDVC6M3KL',
  secretKey: '3rOwQgpcYRrYrtM2fKIhsLhgOVbP1nGKtvKrbASh',
  paper: true,
})
var Date = "2011-01-02T15:04:05Z"
var number = 20
    alpaca.getOrders({
  status: 'open' | 'closed' | 'all',
  after: Date,
  until: Date,
  limit: number,
  direction: 'asc' 
})
async function requestStockInformation(stock,start,end){
const bars = alpaca.getBarsV2(stock, {
  start: start,
  end: end,
  timeframe: alpaca.newTimeframe(30, alpaca.timeframeUnit.MIN),
  limit: 2,
});
const got = [];
for await (let b of bars) {
  got.push(b);
}

}


function countSec(sec){
   if(sec<10){
    return("0"+sec)}
else{
    if(sec==60){return "00"}
    else{return(sec)}

}

}

function setMin(min){
    
if (min<10){
    return "0"+min
}
    if(min==60){
        return "00"
    }
    else{
        return min
    }}
    
function counter(year,month,day){
    var result = []
    var start = year+"-"+month+"-"+day+"T9:30:00Z"
    var end = year+"-"+month+"-"+day+"T4:00:00Z"
    var minute = 0;
    var min = 0;
    var hour = 0;
    let stock_price=0;
    let new_price=0;
    let sec =0;
    for(let z=0;z<=27000;z++){
        
        
        if(minute==60){
            hour+=1
            minute = 0
        }
        if(sec == 59){
            minute+=1
            sec = 0
        }
        else{sec+=1;min=0}
        result.push(year+"-"+month+"-"+day+"T"+hour+":"+setMin(minute)+":"+countSec(sec)+"Z")

        } 
       
         
    return result    
    }
var i = 0;
for(let z=0; z<300;z++){

    if(i==59){
        console.log(0)
    }
    else{console.log(i);}
i+=1
}



counter('2025','09','10')
