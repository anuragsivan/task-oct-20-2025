function getRandomNumber(num1, num2){
    return Math.floor(Math.random()*(num1 - num2)+num2)
}
console.log(getRandomNumber(50,100))