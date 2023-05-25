# Calculadora de IMC

Este é um projeto simples de uma calculadora de IMC (Índice de Massa Corporal) desenvolvida utilizando HTML, CSS e JavaScript.

## Funcionalidades

A calculadora permite que o usuário insira seu peso e altura e, com base nesses valores, calcula o IMC de acordo com a seguinte fórmula:

```
IMC = Peso ÷ (Altura × Altura)
```

Além disso, o resultado do cálculo é classificado em diferentes categorias, de acordo com os seguintes intervalos:

- Menor que 18,5: Magreza
- Entre 18,5 e 24,9: Normal
- Entre 25,0 e 29,9: Sobrepeso
- Entre 30,0 e 39,9: Obesidade
- Maior que 40,0: Obesidade Grave

## Uso

Para utilizar a calculadora de IMC, siga os seguintes passos ou acesse no Link:
[Calculadora IMC](https://jlms-appimc.netlify.app/)

1. Abra o arquivo `index.html` no seu navegador web.
2. Insira seu peso (em quilogramas) no campo "Peso".
3. Insira sua altura (em metros) no campo "Altura".
4. Clique no botão "Calcular" para obter o resultado.

O resultado será exibido abaixo do botão de calcular, indicando o valor do IMC e a classificação correspondente.

## Código JavaScript

A lógica do cálculo do IMC e a classificação dos resultados são implementadas no arquivo `script.js`. Abaixo está o trecho de código responsável por essas funcionalidades:

```javascript
function calcular(event) {
    event.preventDefault()

    let peso;
    let altura;
    let imc;
    let resultado;

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    resultado = document.getElementById('resultado');

    imc = peso / (altura * altura);

    if (peso === '' || altura === '') {
        alert('Preencha os Campos para o Cálculo Correto');
    } else if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Índice de Magreza Cuidado!`;
    } else if (imc >= 18.6 && imc <= 24.9) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Você está Dentro da Normalidade`;
        resultado.style.color = 'green';
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Índice de Sobrepeso Atenção!`;
        resultado.style.color = 'red';
    } else if (imc >= 30 && imc <= 39.9) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Índice de Obesidade Cuidado!`;
        resultado.style.color = 'red';
    } else if (imc >= 40) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} Índice de Obesidade Grave!`;
        resultado.style.color = 'red';
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}
```

## Contribuição

Este projeto foi desenvolvido como uma demonstração

 simples de uma calculadora de IMC. Portanto, não há suporte ativo ou contribuições planejadas. No entanto, sinta-se à vontade para usar o código e personalizá-lo de acordo com suas necessidades.

## Licença

Este projeto é de código aberto e está disponível sob a [Licença MIT](LICENSE). Sinta-se à vontade para utilizá-lo e modificá-lo de acordo com seus requisitos.
