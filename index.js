

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return 'Error: No se puede dividir entre 0';
    }
}

const resultadoSuma = sumar(5, 3);
console.log('Resultado de la suma:', resultadoSuma);
