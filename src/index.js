module.exports = function getZerosCount(number) {
	var i,div=0,zeros = 0;
  for (i=0;i<=number;i=i+5){
      div =i;
      while (div>=5){
          if (div%5==0){zeros++;}
          div=div/5;
      } 
   }
  return(zeros);
}
