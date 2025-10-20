function reassigningConst(){
    try{
        const num = 6
        num =10
    }catch(error){
        console.log('Error:', error.message)
    }
}
reassigningConst()