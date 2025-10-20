
function isValidNumber(val) {
    if(typeof val ==='number' & val!==NaN && isFinite(val) && val !==undefined){
        return true
    }else{
        false
    }
}
console.log(isValidNumber(2))
