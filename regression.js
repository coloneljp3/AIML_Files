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
console.log(sum/x.length)