function calculateDaysToNY() {
    var now = new Date();
    var endOfAYear = new Date().setMonth(11, 31)
    var daysToNY = (endOfAYear - now)/(24*60*60*1000);
    daysToNY=Math.floor(daysToNY);
    return (daysToNY);
}