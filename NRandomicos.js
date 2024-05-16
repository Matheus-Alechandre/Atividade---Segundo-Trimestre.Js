function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];

for (let i = 0; i < 10; i++){
    array.push(randomInt(1,100));
}

console.log("Array com números aleatórios:", array);