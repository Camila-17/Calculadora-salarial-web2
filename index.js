const nombreEmpleado = document.querySelector('#nombreEmpleado');
const valorHora = document.querySelector('#valorHora');
const cantidadHora = document.querySelector('#cantidadHora');
const totalPagarBruto = document.querySelector('#totalPagarBruto');
const totalPagarNeto = document.querySelector('#totalPagarNeto');
const totalPagarQuincenal = document.querySelector('#totalPagarQuincenal');
const totalPagarEmpleado = document.querySelector('#totalPagarEmpleado');
const btnCalcular = document.querySelector('#btnCalcular');
const imagen = document.querySelector('#img');

btnCalcular.addEventListener('click', function(){
    let salario = 0;

    if(cantidadHora.value < 48){
        alert('No cumple con las horas necesarias')
    }else{
        salario = parseInt(valorHora.value) * parseInt(cantidadHora.value);
        totalPagarEmpleado.value = 'Su total señor ' + nombreEmpleado.value + ' es: ';

        totalPagarBruto.value= salario;
        totalPagarNeto.value =   parseInt(salario) * 0.8;
        totalPagarQuincenal.value= parseInt(salario) / 2; 
        imagen.src = 'img/navaja.jpg';
    }
});



    
