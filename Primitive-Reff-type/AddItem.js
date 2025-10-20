function addItem(arr,item){
    temp = arr.slice()
    temp.push(item)
    return temp
}

array = [1,2,3,4,5,6,7,8,9]
item = "nothing"
console.log('Original Array:',array)
console.log(addItem(array,item))
