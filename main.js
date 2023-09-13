const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnPunto = document.getElementById('btnPunto');
// Operaciones Aritmeticas
const btnDividir = document.getElementById('btnDividir');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnRestar = document.getElementById('btnRestar');
const btnSumar = document.getElementById('btnSumar');
const btnIgual = document.getElementById('btnIgual');
// Borrar
const btnBorrar = document.getElementById('btnBorrar');
// Operacion de la calculadora
const showOperacion = document.getElementById('showOperacion')

let escribirNum = (num)=>{
    if(showOperacion.innerHTML == '0'){
        showOperacion.innerHTML = num
    }
    else{showOperacion.innerHTML += num
}
}

// Agregar Numero a la operacion
btn9.addEventListener('click', () => escribirNum('9'));
btn8.addEventListener('click', () => escribirNum('8'));
btn7.addEventListener('click', () => escribirNum('7'));
btn6.addEventListener('click', () => escribirNum('6'));
btn5.addEventListener('click', () => escribirNum('5'));
btn4.addEventListener('click', () => escribirNum('4'));
btn3.addEventListener('click', () => escribirNum('3'));
btn2.addEventListener('click', () => escribirNum('2'));
btn1.addEventListener('click', () => escribirNum('1'));
btn0.addEventListener('click', () => escribirNum('0'));

let variable1;
let variable2;
let resultado;

const funcionSumar = () =>{
    variable1 = parseInt(showOperacion.innerHTML)
    showOperacion.innerHTML = ''
    operacionAritmetica = '+'
}
const funcionRestar = () =>{
    variable1 = parseInt(showOperacion.innerHTML)
    showOperacion.innerHTML = ''
    operacionAritmetica = '-'
}
const funcionDividir = () =>{
    variable1 = parseInt(showOperacion.innerHTML)
    showOperacion.innerHTML = ''
    operacionAritmetica = '/'
}
const funcionMultiplicar = () =>{
    variable1 = parseInt(showOperacion.innerHTML)
    showOperacion.innerHTML = ''
    operacionAritmetica = '*'
}

btnSumar.addEventListener('click', funcionSumar)
btnRestar.addEventListener('click', funcionRestar)
btnDividir.addEventListener('click', funcionDividir)
btnMultiplicar.addEventListener('click', funcionMultiplicar)

const funcionIgual = (operacion) => {
    let variable2 = parseInt(showOperacion.innerHTML);
    switch (operacion) {
      case '+':
        resultado = variable1 + variable2;
        break;
      case '-':
        resultado = variable1 - variable2;
        break;
      case '*':
        resultado = variable1 * variable2;
        break;
      case '/':
        if (variable2 !== 0) {
          resultado = variable1 / variable2;
        } else {
          showOperacion.innerHTML = "División por cero no está permitida";
          return;
        }
        break;
      default:
        showOperacion.innerHTML = "Operación no válida";
        return;
    }
    showOperacion.innerHTML = resultado
}

btnIgual.addEventListener('click', () => funcionIgual(operacionAritmetica));

btnBorrar.addEventListener('click', () => showOperacion.innerHTML = '')