document.getElementById('calculateButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const factorsLabel = document.getElementById('pf');
    
    const num = parseInt(numberInput);
    if (isNaN(num) || num <= 0) {
        factorsLabel.textContent = "Por favor, ingresa un número válido mayor que 0.";
        return;
    }

    factorsLabel.textContent = getPrimeFactors(num).join(", ");
});


document.getElementById('nextPrimeButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const num = parseInt(numberInput);
    const nextPrimeLabel = document.getElementById('nextPrime');

    if (isNaN(num) || num <= 0) {
        nextPrimeLabel.textContent = "Por favor, ingresa un número válido mayor que 0.";
        return;
    }

    nextPrimeLabel.textContent = findNextPrime(num);
});

function getPrimeFactors(n) {
    const factors = [];

   
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}


function findNextPrime(num) {
    let next = num + 1;

    while (true) {
        if (isPrime(next)) {
            return next;
        }
        next++;
    }
}


function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}
