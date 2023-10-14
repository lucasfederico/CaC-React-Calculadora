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
// Borrar Todo
const btnBorrarTodo = document.getElementById('btnBorrarTodo')
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
btnPunto.addEventListener('click', () => escribirNum('.'))
btnDividir.addEventListener('click', () => escribirNum('/'))
btnMultiplicar.addEventListener('click', () => escribirNum('*'))
btnRestar.addEventListener('click', () => escribirNum('-'))
btnSumar.addEventListener('click', () => escribirNum('+'))

let result;

const funcionIgual = () => {
  result = eval(showOperacion.innerHTML)
  showOperacion.innerHTML = result
  console.log(result)
}

btnIgual.addEventListener('click', funcionIgual);

btnBorrar.addEventListener('click', () => {
  showOperacion.innerHTML = showOperacion.innerHTML.slice(0, -1)
})
btnBorrarTodo.addEventListener('click', () => showOperacion.innerHTML = '0')