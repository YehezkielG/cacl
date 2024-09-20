var operationField = document.querySelector(".textarea");
let result = "";
var view = document.getElementById("view");
// var historyField =  document.getElementById("history");
function insert(n){
    operationField.value += n;
    let i = operationField.value;
    view.value += i[i.length-1];
}
function clearE(){
    operationField.value = "";
}
function operation(i){
    operationField.value = "";
    view.value += i;
}
function clearAll(){
    operationField.value = "";
    view.value = "";
}
let history = "";
function sum(){
    // history += view.value + " = " + eval(view.value) + "\n\n";
    // document.getElementById("history").innerHTML = history;
    operationField.value = eval(view.value);
    view.value =  operationField.value
}function backSpace(){
    let result = operationField.value;
    operationField.value = result.slice(0, -1);
    view.value =  view.value.slice(0,-1);
}
function sqrtA(){
    // history += "✓" + operationField.value + " = " + eval(Math.sqrt(view.value)) + "\n\n";
    // document.getElementById("history").innerHTML = history;
    let result =  eval(Math.sqrt(view.value));
    operationField.value = result;
    view.value = result;
}
// document.getElementById("Ch").addEventListener("click", ()=>{
//     // document.getElementById("history").innerHTML = "";
//     history = "";
// })
var hide = 0;

// document.getElementById("hide").addEventListener("click", function (){
//     if(hide == 0){
//         historyField.style ="height:0px; resize:none;"
//         this.textContent = "Un Hide"
//         hide = 1;
//     }
//     else{
//         historyField.style ="height:300px;"
//         this.textContent = "Hide"
//         hide = 0;
//     }
// })
