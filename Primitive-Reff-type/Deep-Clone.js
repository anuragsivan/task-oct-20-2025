function deepClone(obj){
    return clone=(JSON.parse(JSON.stringify(obj)))
}
let obj = {
    user: {
        name: "John", age: 25
    }
}
console.log(deepClone(obj))