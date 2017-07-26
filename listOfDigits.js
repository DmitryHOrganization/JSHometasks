function listOfDigits(list) {
  if (isNaN(list) || list===undefined){
    console.log("Please specify a number value as function parameter")
  }
  else{
    var digitsArr =list.toString().split('');
    return(digitsArr);
  }
}
