function addTwoDigits(n){
    var dig1=(String(n).substr(0,1));
    var dig2=(String(n).substring(1,2));
    var SumDig=0;
    SumDig=parseInt(dig1)+parseInt(dig2);
    return(SumDig);
}
module.exports = addTwoDigits
//console.log(addTwoDigits(456));