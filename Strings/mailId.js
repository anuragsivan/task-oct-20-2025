function extractUserName(email){
   return email.split('@')[0]
}
console.log(extractUserName("samplemail@gmail.com"))
