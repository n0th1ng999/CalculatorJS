const buttons = document.querySelectorAll("#buttons button")
const display = document.querySelector("#display")
const displayOperation = document.querySelector("#displayOperation")

console.log(buttons);
console.log(display);


let FirstNumber 
let operation = ""
let autoclear = false
let opClick = false

buttons.forEach(btn => btn.addEventListener("click", () => {
    if(btn.innerHTML == "="){
        

        if(operation == "x")
        display.innerHTML = FirstNumber * parseFloat(display.innerHTML) 

        if(operation == "/")
        display.innerHTML = FirstNumber / parseFloat(display.innerHTML) 

        if(operation == "-")
        display.innerHTML = FirstNumber - parseFloat(display.innerHTML) 

        if(operation == "+")
        display.innerHTML = FirstNumber + parseFloat(display.innerHTML) 

        operation = ""
    
        FirstNumber = 0
        
        autoclear=true

        opClick = false

        displayOperation.innerHTML=""

    } 
    
    else if(btn.innerHTML == "x"){
        if(!opClick){
        FirstNumber = parseFloat(display.innerHTML)
        display.innerHTML = "" 
        }
        operation = "x"
        opClick = true

        displayOperation.innerHTML = FirstNumber + " " + operation
    }

    else if(btn.innerHTML == "/"){
        if(!opClick){
        FirstNumber = parseFloat(display.innerHTML)
        display.innerHTML = "" 
        }
        operation = "/"
        opClick = true

        displayOperation.innerHTML = FirstNumber + " " + operation
    }

    else if(btn.innerHTML == "+") {
        if(!opClick){
        FirstNumber = parseFloat(display.innerHTML)
        display.innerHTML = ""
        }
        operation = "+"
        opClick = true

        displayOperation.innerHTML = FirstNumber + " " + operation
    }

    else if(btn.innerHTML == "-"){
        if(!opClick){
        FirstNumber = parseFloat(display.innerHTML)
        display.innerHTML = "" 
        }
        operation = "-"
        opClick = true

        displayOperation.innerHTML = FirstNumber + " " + operation
    }
    else if(btn.innerHTML == "C"){
        display.innerHTML = "" 
    }
    else if (btn.innerHTML =="AC"){
        display.innerHTML = "" 
        displayOperation.innerHTML=""
        operation = ""
        FirstNumber = 0
        opClick = false

    }

    else{
        
        if(autoclear){
            display.innerHTML = btn.innerHTML
            autoclear = false   
                
            
        }
        else{
            display.innerHTML += btn.innerHTML
        }
    }
    
}));