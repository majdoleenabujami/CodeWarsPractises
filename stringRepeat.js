
//Task3(stringRepeat)

//the first solution
function stringRepet1(n,s){
//1
let str='';
//2
for(let i=0;i<n;i++){
    str+=s;;
  }
  return str;
}
//test
console.log(stringRepet1(4," hi "))

//////////////////////

//the best solution

stringRepet2=(n,s) => s.repeat(n);
 
 //test
console.log(stringRepet2(5," hello "))