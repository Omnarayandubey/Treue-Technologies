/* document */
/*eslint-disable no-console
*/

var lengthInput = document.getElementById('lengthInput');
var lengthOutput = document.getElementById('lengthOutput');
var unitSelect = document.getElementById('unitSelect');
var resultSelect = document.getElementById('resultSelect');

var unitSelectValue;
var resultSelectValue;

lengthInput.addEventListener("keyup" , conversion);

unitSelect.addEventListener("change",conversion);
resultSelect.addEventListener("change",conversion);

unitSelectValue=unitSelect.value;
resultSelectValue=resultSelect.value;

function conversion() {
   unitSelectValue=unitSelect.value;
resultSelectValue=resultSelect.value;
    
    
    if(unitSelectValue === "km" && resultSelectValue === "mm"){
        lengthOutput.value=Number(lengthInput.value)*1000;
    } else if(unitSelectValue==="km" && resultSelectValue === "cm"){
                lengthOutput.value=Number(lengthInput.value)*100000;

    } else if(unitSelectValue==="km" && resultSelectValue === "km"){
        lengthOutput.value=lengthInput.value;
    } 
    
    
    if(unitSelectValue==="mm" && resultSelectValue === "mm"){
                lengthOutput.value=lengthInput.value;

    } else if(unitSelectValue==="mm" && resultSelectValue === "cm"){
        lengthOutput.value=Number(lengthInput.value)*100;
    } else if(unitSelectValue==="mm" && resultSelectValue === "km"){
        lengthOutput.value=Number(lengthInput.value)*0.001;
    } 
    
    if(unitSelectValue==="cm" && resultSelectValue === "mm"){
                lengthOutput.value=Number(lengthInput.value)*0.01;

    } else if(unitSelectValue==="cm" && resultSelectValue === "cm"){
                lengthOutput.value=lengthInput.value;

    } else if(unitSelectValue==="cm" && resultSelectValue === "km"){
                lengthOutput.value=Number(lengthInput.value)*0.00001;

    }

}