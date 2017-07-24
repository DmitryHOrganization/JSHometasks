function startGame(){
    var secretNumber=Math.round(Math.random()*100);
    var counter =0;
    var number= prompt('Enter a number please', '')
    while(true){
        if(isNaN(number)||number ===null){
            number = prompt('Please specify a number you think is a secret one', '');
        }
        else{
            ++counter;
            if(number < secretNumber){
            number = prompt('Entered value is too small. Let\'s try again with a bigger one.', '');
           }
            else if(number > secretNumber){
            number = prompt('Entered value is too big. Let\'s try again with a smaller one.', '');
            }
            else {
                alert('Congratulations! You win within '+counter+' try(ies)! Secret number is ' + secretNumber);
                break;
            }
         }
    } return(counter);
                
}