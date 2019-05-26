let calc = document.getElementById('calculate');
let buttons = document.getElementsByClassName('button');
let display = document.getElementById('display');
let dotter = document.getElementById('dotter');
let str = "";
let value1, value2;
let sign = "";

for (let i = 0; i < buttons.length; i++) {
    addEvent(buttons[i]);               
}

function addEvent(button) {
    button.addEventListener('click',  events);
}

function events () {
//    if(arguments === 'undefined'){
//        return false;   
//    }
    let type = this.getAttribute('data-type');
    switch(true){
        case (type === "/" || type === "+" || type === "*" || (type === "-" && display.value.length != 0)): sign = type; value1 = +str; str = ''; dotter.disabled = false; break;  
        case (type === "="): value2 = +str; dotter.disabled = false; break;
        case (type === 'C'): str = ''; dotter.disabled = false; break;
        case (type === "CE"): str = str.substring(0, str.length - 1); break;
        case (type === "." && display.value.length === 0): str += '0'; dotter.disabled = true; break;
        case (type === "." && display.value.length != 0): dotter.disabled = true; break;
    }
    
    if(str.length < 8){
        if(type === "/" || type === "+" || type === "*" || (type === "-" && display.value.length != 0)){str = '';}
        else if (type === "="){value2 = +str;} 
        else if (type === 'C') {str = '';} 
        else if (type === 'CE') {str;}
        else {str += type;}
    }
    
    display.value = str;
        
    if(type === "="){
            switch(sign){
                case '+': display.value = plus(value1, value2); break;
                case '-': display.value = minus(value1, value2); break;
                case '/': display.value = divide(value1, value2); break;
                case '*': display.value = times(value1, value2); break;
            }
            
        } 
};

function plus(a, b){
    if(typeof a === 'string' || typeof b === 'string' || isNaN(a) || isNaN(b)){
       return false;
    }
    let rez = a + b;
    return rez;    
}
    
function minus(a, b){
    if(typeof a === 'string' || typeof b === 'string' || isNaN(a) || isNaN(b)){
       return false;
    }
    let rez = a - b;
    return rez;    
}
    
function times(a, b){
    if(typeof a === 'string' || typeof b === 'string' || isNaN(a) || isNaN(b)){
       return false;
    }
    let rez = a * b;
    return rez;    
}
    
function divide(a, b){
    if(typeof a === 'string' || typeof b === 'string' || isNaN(a) || isNaN(b)){
       return false;
    }
    let rez = a / b;
    if(b === 0) {
        rez = 'Сам на ноль дели!'
    }
    return rez;    
}




