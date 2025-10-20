function capatilizw(string){
    return string.split(' ').map(word=>word.substring(0,1).toUpperCase() + word.substring(1)).join(' ')
}
let string = "hello there! how are you doing?"
console.log(capatilizw(string))


