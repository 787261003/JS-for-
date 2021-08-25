let sum = 0;
let average = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
average = sum / 100;
console.log(average);

let even = 0;
let odd = 0;
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        even += i
    } else {
        odd += i
    }
}
console.log(`1~100 之间偶数的和是${even}`);
console.log(`1~100 之间奇数的和是${odd}`);


let result = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        result += i;
    }
}
console.log(`1~100 被3整除的和是${result}`);