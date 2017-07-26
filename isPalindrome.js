function isPalindrome(value) {
if(!isNaN(value) || value===undefined){
    console.log('Specified parameter is not a valid string')
}
else{
  var valueReverse = value.toString().split('').reverse().join('');
  return(value===valueReverse);
}
}