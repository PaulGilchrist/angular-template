/// <reference lib="webworker" />

let currentPrime: number;
let min: number;
let max: number;
let pause: boolean;

const isPrime = (num: number) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num %i === 0) {
            return false;
        }
    }
    return true;
};

const calculatePrimes = async (start: number, end: number) => {
    pause = false;
    for (let i = start; i < end; i++) {
        if (pause) {
            break;
        }
        if (isPrime(i)) {
            currentPrime = i; // In case we pause, we know where to resume
            postMessage({primeNumber: i});
            // Every time we find a prime, wait just long enough to allow reacting to post messages
            await promiseTimeout(0);
        }
    }
};

const promiseTimeout = (delay) =>
    // Promisification of setTimeout
    new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });

addEventListener('message', ({ data }) => {
    console.log(`Starting web worker`);
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
