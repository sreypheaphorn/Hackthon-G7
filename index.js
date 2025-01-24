const display = document.getElementById("display");
function appen(input) {
    display.value += input;

}

function Delete() {
    display.value = "";

}
function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch(error){
        display.value ="Error";
    }
}
function Back() {
    // var ev = document.getElementById('display');
    display.value = display.value.slice(0, -1);
 }
function Solve (input) {
    display.value /= input;
}