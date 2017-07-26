function elementInArray(arraySearchIn, value) {
  for(var i=0; i<arraySearchIn.length; i++){
      if(arraySearchIn[i] == value){
          return(i);
        }
     } return(-1);
}