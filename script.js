function displayValue(num){
let res=document.querySelector("#result")
res.value+=num


}


function clearBox(){
result.value=""
}

function evaluateExpression(){
    let expr=result.value;
    let out=eval(expr)
    result.value=out;
}