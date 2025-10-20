console.log(Array.isArray({}))
console.log(Array.isArray([]))



function restParameter(...arg){
    console.log(Array.isArray(arg))
}
restParameter(1,2,3,4,5)

