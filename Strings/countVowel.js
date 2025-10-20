let count = 0
function countVowels(str){
    str = str.toLowerCase()
    for(let i =0;i<str.length;i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++
        }
    }
    return count
}
console.log(countVowels('hello there its me!'))
