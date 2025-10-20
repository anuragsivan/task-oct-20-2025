function getValue(a){
    if(a === undefined){
        return "No Value"
    }else if(a === null){
        return "Empty"
    }else{
        return a
    }
}
console.log(getValue(5))