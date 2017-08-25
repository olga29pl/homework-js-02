const n = parseFloat(prompt('Enter the number'));

function fib(n) {
    let x1 = 0;
    let x2 = 1;
    let x3 = 1;
    for (let i = 2; i <= n; i++) {
        x3 = x1 + x2;
        x1 = x2;
        x2 = x3;
    }
    return x3;
}

// function fib (n) {
//     const sqrt = Math.sqrt(5);
//     const a =(1+sqrt)/2;
//     const b =(1-sqrt)/2;
//     return (Math.pow(a,n) - Math.pow(b,n))/sqrt;
// }

// function fib(n){
//     let number;
//     if(n>2){
//         number=fib(n-1)+fib(n-2);
//     }else{
//         number=1;
//     }
//     return number;
//     }

// function fib (n){
//     let fibArr=[1,1];
//     for (let i=2; i<n; i++){
//         fibArr[i] = fibArr[i-1]+fibArr[i-2];
//     }
//     return fibArr[n-1];
// }
const fibonacci = fib(n);
document.write(fibonacci);
