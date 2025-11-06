var fs = require('fs')
var math= require('mathjs')
class Neuron{
    static e = 2.71828182845904;
    constructor(input_values=[],input_weights=[],value=0,input_neurons=[],bias = 0){
        this.input_neurons = input_neurons
        if(input_values.length==0){
        for(let i of input_neurons){
        input_values.push(i.value);
                        let a = Math.random()

        }}
        this.inputs = input_values;
        
        if(input_weights.length == 0){this.weights = this.randomWeights();}else{this.weights = input_weights
}
        this.value = this.final_value()
        this.bias = bias
    }
    randomWeights(){
        var input_weights= []
        for(let i of this.inputs){
input_weights.push(Math.random(0,1))
        }
        
        return input_weights
    }
    getPreActSum(){
    var sum=0
    var values=[];
for(let a of this.inputs){        
;values.push(a)}
    var weights = this.weights;
    for(let i of values){
     let mult = i*(weights[values.indexOf(i)])
    sum+=mult
    };
return sum
    }

    reLu(x){
        if(x>0){return x}else{return 0}
    }
    
    sigmoid_function(x){
return 1/(1+(Neuron.e)**-x)
    }

    soft_max_function(){
        var output = []
        var sum=0; for(let i of this.input_values){i=Neuron.e**i;sum+=i}
        for(let i of input_layer){
            i = Neuron.e**i;
            output.push(i/sum)
        }
    return {"sum":sum,"output":output}
    }
    
    final_value(){
    
    return {"formula":"1/(1+"+Neuron.e+"**-x)","result":this.sigmoid_function(this.getPreActSum())}
       
    }


updateWeights(learning_rate){
     var error_term = this.final_value()["result"];
     while(error_term>0){
         let arr = [];
         for(let a of this.weights){
     let new_weight = a -learning_rate*(error_term/a);
        arr.push(new_weight);
             console.log(new_weight)
        a = new_weight;
         }
         this.weights = arr;
}

    
}}
class HiddenLayer{
    constructor(length,neurons=[])
    {if(neurons.length==0){
        for(let i=0;i<length;i++){
            neurons.push(new Neuron())
        }
    }
        this.length = length
        this.neurons = neurons
    }
    
    }
 


class NeuralNetwork{

    static learning_rate = .001;
    constructor(size,input_layer=[],layers =[],output_layer = 0,output_weights=[]){
        for(let i=0;i<size;i++){
            layers.push(new HiddenLayer(2))
        }
            
    
        this.input_layer = input_layer
        for(let i of layers[0].neurons){
            i.inputs = input_layer
            for(let a of input_layer){
                i.weights.push(Math.random())
            }
        }
        
        for(let i =1; i<layers.length;i++){
        for(let z of layers[i].neurons){
            if(z.inputs!=input_layer){
                z.input_neurons = layers[i-1].neurons
                var inp = []
                var weights = []
                for(let d of layers[i-1].neurons){
                    inp.push(d.final_value()["result"])
                    weights.push(Math.random(0,1))
                }
                z.inputs = inp
                z.weights = weights
                z.value = z.final_value()["result"]
            }
            else{continue}
        }}
        this.layers = layers
        this.output_layer = this.output()
        for(let i of layers[layers.length-1].neurons){
            output_weights.push(1)
        }
        this.output_weights = output_weights
        
    }
    
    applyWeights(list_of_weights){
    var neuron_sets = this.layers
    var neuron_inputs = this.input_layer
    var new_inputs=[];
    var length = neuron_sets.length;
    var val;
    let i = 0
    for(let layer=0;layer < length;layer++){
        for(let neuron of this.layers[layer].neurons){
        var index = this.layers[layer].neurons.indexOf(neuron)
        neuron.inputs = neuron_inputs
        neuron.weights = list_of_weights[index]
        neuron.value = neuron.final_value()["result"]
        new_inputs.push(neuron.value)
        val = neuron
        i+=1
        }
        neuron_inputs = [val]

        
        

    }
    }
learn(expected_value){
while(expected_value != this.accessAllOutputValues(this.layers[this.layers.length-1].neurons)){
for(let i of this.layers){
    console.log(i)
    for(let a of i.neurons){
        a.updateWeights(NeuralNetwork.learning_rate);
        
    }
}

    
   
}}
    buildHiddenLayers(num){
    var layers = []
    for(let i=0;i<num;i++){
        let h= new HiddenLayer(4)
    layers.push(h)
    }
        return layers
    }

     calcGradient(n,S,O){
return n*S*O
    
}
change_in_weight(learning_rate,error_term,output){
return learning_rate*error_term*output
    
}
 outputUnitError(actual_output,target_output){

    var new_weight = actual_output(1-actual_output)*(target_output-actual_output);
    return new_weight
}

 hiddenUnitError(actual_output,target_output,learning_rate,weight){//first, find the hiddenUnitErrors for all given weights, then use the calcGradient function iteratively on each weight 
     
    var new_weight = actual_output*(1-actual_output) *weight*(target_output-actual_output)
    return new_weight
}

calcGradient(learning_rate,target_output){
    for(let layer of this.layers){
        for(let neuron of layer.neurons){
            let actual_output = this.layers[this.layers.length-1].neurons[0].final_value()["result"]

            var new_weights = []
            for(let weight of neuron.weights){
            let weight = .3
var new_weight = learning_rate *this.hiddenUnitError(actual_output,target_output,learning_rate,weight) *neuron.final_value()["result"];new_weights.push(new_weight)
            
            }
             neuron.weights = new_weights
        }
    }
    
    
}

output(){
var inputs = this.layers[this.layers.length-1].neurons
var last_neuron = new Neuron(inputs,this.output_weights)
this.output_layer = last_neuron.final_value()["result"]
}



   
   
   
   changeNeuralInputs(new_input_layer){
       for(let i of this.layers[0].neurons){
        i.inputs = new_input_layer
    } for(let i =1; i<this.layers.length;i++){
        for(let z of this.layers[i-1].neurons){
                z.input_neurons = this.layers[i].neurons
                var inp = []
                var weights = []
                for(let d of z.input_neurons){
                    inp.push(d.final_value()["result"])
                }
                z.inputs = inp
                z.value = z.final_value()["result"]
                    }}
    
}
     MSE(predictions, target){
var sum = 0;
    for(let i =0;i<predictions.length;i++){
sum+=2*(predictions[i]-target[i])
}    
    return sum/predictions.length
}

 accessAllOutputValues(neurons){
    var output = []
    for(let i of neurons){
        output.push(i.final_value()["result"]);
    }
    return output
}

 
    
}

class Embedding{
constructor(separated_training_data,value,numenc){
    this.training_data = separated_training_data
    this.value = value
    this.numenc = numenc
}
onehot(){
    var embedding = []
    for(let i of this.training_data){
        if(this.value == i){
            embedding.push(1)
        }
        else{
            embedding.push(0)
        }
    }
    return embedding
}


}
function context(embedding,number,lis){
    return lis[embedding["numerical"] + number]
}

function CBOW(training_data){
 
training_data = training_data.split(" ")
    var result = []
let a = 0
for(let i of training_data){
let emb = new Embedding(training_data,i,a)
if(a == 2){
let first_context_word = context(emb,-1,result)
let second_context_word = context(emb,-2,result)
let third_context_word = context(emb,1,result)
let fourth_context_word = context(emb,2,result)
}
result.push({"embedding":emb.onehot(),"value":emb.value,"numerical":emb.numenc,"context":[]})
a+=1}
for(let i of result){
let first_context_word = context(i,-1,result)
let second_context_word = context(i,-2,result)
let third_context_word = context(i,1,result)
let fourth_context_word = context(i,2,result)
i.context = [first_context_word,second_context_word,third_context_word,fourth_context_word]
}

    return result
}


var neurons = []
var number_of_neurons = 2
for(let i=0; i<number_of_neurons;i++){
    neurons.push(new Neuron())
}
var net = new NeuralNetwork(2,[1,0,1,0,0]);
var actual_output = net.layers[1].neurons[0].final_value()["result"]
var target_output = 0.5
var learning_rate = .0001

  
//When using the softmax function: here are the steps: var input layer = [1,2,3,4,5]]
//1. convert all values to e^x [1,2,3,4,5]->[2.72,7.39,20.08,54.60,148.41,403.43] ->var sum; for(let i of input_layer){i=e**i;sum+=i}
//2. Sum up all values in the input_layer to get a denominaot rvalue of 636.63 
//3.Now, create fractions for all indices in the input layer 2.72/636.63, 7.39/636.63,etc.
//4.
//5.
//6.
function linearReg(data){
var numerator = 0
var denominator = 0
var mean_x=0
var mean_y=0
for(let i of data){
    mean_x +=i.x
    mean_y+=i.y
}
    mean_x = mean_x/data.length
    mean_y = mean_y/data.length
    
for(let i of data){


i.res_y = mean_y - i.y
i.res_x = mean_x-i.x

numerator+=(i.res_x*i.res_y)
denominator += (i.res_x**2)
}

return {slope:numerator/denominator,intercept:mean_y - numerator/denominator*mean_x}
}
function logReg(L,k,x,x0){
return L/1+e**-k(x-x0)
    
}
var document = fs.readFile('list_of_companies.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
});

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


function crossEntropyLoss(x){
    return -Math.log(x)
}




function derivative(arg,variable){
    arg = math.derivative(arg,variable,{simplify:false})
    if(typeof arg.args[0]!='OperatorNode'){
        var x = arg.args[0] +arg.op+arg.args[1]
        x = x.replaceAll('^','**')
        return x}
    else{
       
        
        return new Number(arg.args[0]) +new Number(arg.op)+new Number(arg.args[1])+derivative(new Number(arg.args))
    }
}



function chainForCostFunction(neuron,expected_value){
var sum = 0
var result;
    2*(neuron.final_value()["result"]-expected_value)
var deriv_c = '2'+'*'+(neuron.final_value()["result"]-expected_value);
var deriv_summation = derivative('1 / (1+2.71828182845904^-x)','x');
for(let i of neuron.inputs){
     sum+=i
    
}
    
    result ={'inputs':neuron.inputs, 'result':sum+'*'+deriv_c+'*'+deriv_summation
}
     
    
if(neuron.input_neurons==[]){return "Finished"}
for(let i of neuron.input_neurons){
    chainForCostFunction(i,result)
    
    
}

}


var op = net.accessAllOutputValues(net.layers[1].neurons);
//console.log(net.layers[])
//console.log(chainForCostFunction(net.layers[1].neurons[0],.5))
let i =net.MSE(op,[1.2,1.9]) 


let TestN = new Neuron([1,0,1,0],[.2,.3,.4,.5])
console.log(TestN.final_value());
TestN.updateWeights(.2);
console.log(TestN.final_value());