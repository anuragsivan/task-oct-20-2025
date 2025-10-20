function isValidNumber(num){
    return typeof num == 'number' && isFinite(num)
}
console.log(isValidNumber(123))

