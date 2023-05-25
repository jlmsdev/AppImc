/** formula
 * IMC = Peso ÷ (Altura × Altura)
 */

/**
 *  Menor que 18,5 	Magreza 	
    Entre 18,5 e 24,9 	Normal 	
    Entre 25,0 e 29,9 	Sobrepeso 	
    Entre 30,0 e 39,9 	Obesidade 	
    Maior que 40,0 	Obesidade Grave
 */

function calcular(event) {
    event.preventDefault()

    let peso;
    let altura;
    let imc;
    let resultado;

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    resultado = document.getElementById('resultado');

    imc = peso / ( altura * altura );

    if(peso === '' || altura === '') {
        alert(`Preencha os Campos para o Calculo Correto`);

    } else if( imc < 18.5 ) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Indice de Magreza Cuidado!`;

    } else if( imc >= 18.6 && imc <= 24.9 ) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Você está Dentro da Normalidade`;
        resultado.style.color = 'green';

    }else if( imc >= 25 && imc <= 29.9 ) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Indice de Sobrepeso Atenção!`;
        resultado.style.color = `red`;

    }else if( imc >= 30 && imc <= 39.9 ) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Indice de Obesidade Cuidado!`;
        resultado.style.color = `red`;

    } else if( imc >= 40 ) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Indice de Obesidade Grave!`
        resultado.style.color = `red`;
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

}