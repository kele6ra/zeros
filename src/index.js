module.exports = function getZerosCount(number) {
  var zeros = 0;
  while(number){
    number = (number/5)|0;
    zeros+=number;
  }
  return(zeros);
}
