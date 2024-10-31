document.getElementById('btn').addEventListener('click', function() {
    const numInput = document.getElementById('num').value;
    const fibonacciLabel = document.getElementById('fibonacciLbl');

    
    const num = parseInt(numInput);

    
    if (isNaN(num) || num < 0) {
        fibonacciLabel.textContent = 'Por favor, introduce un número entero no negativo.';
        return;
    }

    let result = fibonacci(num);
    fibonacciLabel.textContent = `El número de Fibonacci en la posición ${num} es: ${result}`;
});

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
