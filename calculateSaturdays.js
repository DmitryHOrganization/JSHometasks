function calculateSaturdays(a, b) {
    var years = [];
    for (var i=a; i<=b; i++){
        day = new Date(i, 0, 1).getDay();
        if(day==6) {
            years.push(i);
         }
    } return(years);
}