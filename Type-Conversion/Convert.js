let arr = ['42','42px','','null',null,undefined,true,false]
result=[]
arr.forEach((item)=>{
    result.push(Number(item))
})
console.log(result)