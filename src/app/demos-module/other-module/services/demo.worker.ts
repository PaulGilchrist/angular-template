/// <reference lib="webworker" />

let currentPrime;
let min;
let max;
let pause;

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num %i === 0) {
            return false;
        }
    }
    return true;
}

async function calculatePrimes(min, max) {
    pause = false;
    for (let i = min; i < max; i++) {
        if (pause) {
            break;
        }
        if (isPrime(i)) {
            currentPrime = i; // In case we pause, we know where to resume
            postMessage({primeNumber: i});
            // Every time we find a prime, wait just long enough to allow reacting to post messages
            await PromiseTimeout(0);
        }
    }
}

function PromiseTimeout(delay) {
    // Promisification of setTimeout
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}

addEventListener('message', ({ data }) => {
    const response = `Starting to process primes`;
    switch (data.action) {
        case 'start':
            max = data.max;
            min = data.min;
            postMessage({message: `Starting to process primes from ${min} to ${max}`});
            calculatePrimes(min, max);
            break;
        case 'pause':
            pause = true;
            postMessage({message: `Pause processing at prime ${currentPrime}`});
            break;
        case 'resume':
            postMessage({message: `Resume processing primes from ${currentPrime} to ${max}`});
            calculatePrimes(currentPrime, max);
            break;
    }
});
