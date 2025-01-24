const display = document.getElementById("display");

function appendToDisplay (input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";

}

function calculate (){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";

    }
}
function del() {
    display.value = display.value.slice(0, -1);
  }
function percentage(input){
    display.value /= input;
}  