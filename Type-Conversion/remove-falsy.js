function removeFalsy(arr){
    result = []
    arr.forEach((item)=>{
        if(item === false || item === 0 || item === '' || item == null || item == undefined || item === NaN){

        }else{
            result.push(item)
        }
    })
    return result
} 
arr = ["hii",45,undefined,"age",NaN,"Ramu",null]
console.log(removeFalsy(arr))
