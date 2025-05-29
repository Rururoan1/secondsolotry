const enter = document.getElementById('enter');
const celcious = document.getElementById('celcious');
const farenheit= document.getElementById ('farenheit');
const submit = document.getElementById ('submit');
const result = document.getElementById('result');
let temperature;


document.getElementById('submit').onclick = function (){
        if(celcious.checked){
            temperature = Number(enter.value);
            temperature = temperature * 9 / 5 + 32;

            result.textContent = temperature.toFixed(1) + "⁰F";
        }
        else if(farenheit.checked){
            
        }
        else{
            result.textContent = 'please enter  unit convertion';
        }
  
}

