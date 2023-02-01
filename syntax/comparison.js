console.log(1==1); //true  ( js에서는 등호로 비교할때는 가급적이면 3개를 사용해야함 )
console.log(1==2); //false ( 왜나하면 등호를 2개사용하면 비교할때 추상적인 같음을 비교하기 때문에 자동으로 형변환을 진행함 )
console.log(1>2);  //false ( 하지만 등호를 3개 사용하면 엄격한 같음을 비교하기 때문에 형변환을 하지 않고 비교하므로 등호를 3개 사용하는것을 습관화 할것)
console.log(1<2);  //true
console.log(1===1);
console.log(1===2);
