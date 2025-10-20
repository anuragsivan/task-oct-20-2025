let obj = {
    name: 'Michale',
    address:{
        city: 'Paris',
        street: 'Gotham Street'
    }
}

let spredClone = {...obj}
let assignClone = Object.assign({},obj)
obj.address.street = 'some city'

console.log("Real Object:",obj)
console.log("Clone Using Spread",spredClone)
console.log("Clone Using Assign:",assignClone)