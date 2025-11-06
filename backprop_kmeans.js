var math = require('mathjs');
function mean(x_values){
var sum = 0
    for(let i of x_values){
    sum+=i
}
    return sum/x_values.length
}

function standardDeviation(x_values){
var sum = 0
    for(let i of x_values){
sum+=(i-mean(x_values))**2
        
    }
    var result = sum**.5 /(x_values.length-1) 
return result
}
function zScore(x_values){
    var z_pairings = []
    for(let i of x_values){
        z_pairings.push({i:(i-mean(x_values))/standardDeviation(x_values)})
    }
    return z_pairings
}


function derivative(arg,variable){
    arg = math.derivative(arg,variable,{simplify:false})
    if(typeof arg.args[0]!='OperatorNode'){
        var x = arg.args[0] +arg.op+arg.args[1]
        x = x.replaceAll('^','**')
        return x}
    else{
       
        
        res =  new Number(arg.args[0]) +new Number(arg.op)+new Number(arg.args[1])+derivative(new Number(arg.args))
    }
}

function evaluateExpr(expr,variables,values){
    expr = expr.split(" ")
    for(let i = 0; i<expr.length;i++){
        if(expr[i] == variables[0]){
            expr[i] = values[0]
        }
            
        else if(expr[i]==variables[1]){
            expr[i] = values[1];
        }
    }
    return eval(expr.join(" "));
}


console.log(evaluateExpr(derivative('x^2 + 2','x'),["x"],["2"]));

//Linear Regression Formula

var x = []
var y = []

var slope = 0;


function y(x,slope,intercept){
    return x*slope + intercept
}
var sum = 0
for(let i; i<y.length;i++){
sum+=(y(x[i],slope,intercept)-y[i])**2

}

function changeTimeIncrements(data){

    
}


function convert60(x,ty){
    if(ty=="minute"){
    return x*60;}
    else{return x*3600;}
}

function adjustXAxis(divisions, length){
var start_min = 0;
var start_second = 0;
var start_second_
var start_hour = 0;
var total_sum_of_time = 0;
var start_millisecond = 0;
var unit_of_time =0;
var end_list = []
while(total_sum_of_time<27000){
if(start_millisecond%1000==0){start_millisecond=0;start_sec+=1;}
else{
start_millisecond+=1;
    }}
while(total_sum_of_time<27000){
    if(start_min %59 ==0){start_hour+=1;start_min=0;}
    else if(start_second%59==0){start_min+=1;start_second=0;
    total_sum_of_time =  convert60(start_hour,"hour") + convert60(start_minute,"minute") + start_second + start_millisecond
     increment_of_time = total_sum_of_time * 1/divisions;
    for(let i = 0; i<=divisions;i++){
    end_list.push({"time":total_sum_of_time + increment_of_time*i,"x-axis-pixel":length/divisions})
                               }
                               }
    else{start_second+=1;}
   
}
    
    
}

function getPrice(stock){}

function adjustYAxis(opening_price,divisions,length){
var incremental_price = opening_price * 1/divisions;
for(let i = 0;i<=divisions;i++){
end_list.push({"price":opening_price + incremental_price*i,"y-axis-pixel":length/divisions});

}
    
}


//Code for K-Means Clustering

function euclideanDistance(coord1, coord2){
    let sum = 0;
for(let i of Object.keys(coord1)){
    sum+=(coord1[i] - coord2[i])**2;
}
    return sum**.5;
}

function Kmeans(k,data){
var data_points = [];
for(let i = 0; i<k;i++){
data_points.push({"type":"centroid",x:Math.random(0,10),y:Math.random(0,10)})
    
}
    let current_d;
    let current_centroid;
    let centroids = [];
    let closest_centroid = 0;
    

for(let i = 0;i<data.length;i++){
    
    for(let z of data_points){
        let d =euclideanDistance({"x":data[i].x,"y":data[i].y},{"x":z["x"],"y":z["y"]});
    if(z == data_points[0]){
            current_d = d;
            current_centroid = {"x":z["x"],"y":z["y"]};

        }
        else if(current_d<d){
                continue
            
        }
  
          else{
              current_d = d;
              current_centroid = {"x":z["x"],"y":z["y"]};
          }
        
        }
           data[i].distance = current_d;
            data[i].centroid = current_centroid;
            
            }
    return data;
}

function clusterAlgo(k,data){
let x = Kmeans(k,data);
let xsum = 0;
let ysum = 0;
for(let i of x)    
{xsum+=i.x;
ysum+=i.y;
}
xsum = xsum/k;
ysum = ysum/k;

for(let z of x){
    let distTest = euclideanDistance({"x":z["x"],"y":z["y"]},{"x":z["centroid"]["x"],"y":z["centroid"]["y"]})>euclideanDistance({"x":z["x"],"y":z["y"]},{"x":xsum,"y":ysum});
    while(distTest){
            
        }
    }

if(!distTest){
    check_centroids+=1;
}
}


function convertDataToGraph(data_points, id){
    var root = document.getElementById("root");
    let highest_x=data_points[0]["x"];let highest_y=data_points[0]["y"];
    for(let i of data_points){
        if(i["x"]>highest_x){highest_x = i["x"];}
        if(i["y"]>highest_y){highest_y = i["y"];}
    }
    root.style.height = highest_y;
    root.style.width = highest_x;
    root.style.height = highest_y;
    root.style.width = highest_x;
    root.style.borderBottomStyle = 'solid';
    root.style.borderBottomcolor = "black";
    root.style.borderLeftColor = "black";
    root.style.borderLeftStyle = "solid";
    
       
    for(let i of data_points){
        let point = document.createElement('div');
         
        point.style.borderRadius = "25%";
        point.style.backgroundColor ="black";
        point.style.height = "2px";
        point.style.position = "fixed";
        point.style.width = "2px";
        console.log(highest_y-i["y"])
        point.style.top = (highest_x);
        point.style.left = i["x"];
    root.appendChild(point);    
}}







console.log(Kmeans(2,[{x:3,y:5},{x:40,y:10},{x:9,y:14}]))
