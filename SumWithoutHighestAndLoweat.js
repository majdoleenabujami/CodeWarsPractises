//# Task 3

function sumArray1(array){
//1
  if (array.length===0 || array.length===1) {
    return 0;
  }
//2
  let highest=Math.max(...array);
//3
  let lowest=Math.min(...array);
//4
 let filterArray = array.filter(function(i){
         
          return  i!==highest && i!== lowest});
//5
 let arraySumation=filterArray.reduce  (function(acc,current,index){ 
       
          return acc+current },0);
        
          return arraySumation;
}

//test
console.log(sumArray1([2,9,5,1,11,5]));//2
console.log(sumArray1([6]));//null


////////////////////////


// another solution

function sumArray2(array){
  if (array.length===0 || array.length===1) {
    return 0;
  }
 return array.filter((i)=>i!==Math.max(...array) && i!== Math.min(...array)).reduce((acc,current)=>acc+current,0);
 return array;
}

console.log(sumArray2([2,9,5,1,11]));//2
console.log(sumArray2([6]));//null


////////////////////////

function sumArray3(array){
 //1
 if (array.lengtht===0 || array.length===1) {
    return 0;
  }
//2,3,3
return array.sort((x,y)=>y-x).slice(1,-1).reduce((acc,curr)=>acc+curr ,0);
 return array;
}
//rest
console.log(sumArray3([1,3,4,2,5,5]));//2
console.log(sumArray3([6]));//null

//The right solutiin

function sumArray4(array){
   return  (array==null) ?0
   :array.sort((x,y)=>y-x).slice(1,-1).reduce((acc,curr)=>acc+curr ,0);
   return array;
  }
//test
 console.log(sumArray4([1,3,4,2,5,5]));