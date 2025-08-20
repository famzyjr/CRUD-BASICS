// implementing finabocci number with for loop 
let prev2 = 0;
let prev1 = 1;

// for(let i = 0; i < 18; i++){
// let fib = prev1 + prev2; 
// prev2  = prev1;
// prev1 = fib;
// console.log(prev2);
// }

// implementing finabocci number with for recursion

const Fin = () => {
    for (let i = 0; i < 18; i++) {
        let finaa = prev2 + prev1;
        prev2 = prev1;
        prev1 = finaa;
        console.log(prev1);
    }
}
console.log(Fin());

// Finding The nth Fibonacci Number Using Recursion


function F(n) {
    if (n <= 1) {
        return n;
    } else {
        return F(n - 1) + F(n - 2);
    }
}

console.log(F(19));
