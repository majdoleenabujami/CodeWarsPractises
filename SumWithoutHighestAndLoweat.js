//# Task 3
/*
function sumArray(array){
//1
  if (array.lengtht===0 || array.length===1) {
    return "null";
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

console.log(sumArray([2,9,5,1,11,5]));//2
console.log(sumArray([6]));//null
*/



////////////////////////

// another solution

function sumArray(array){
  if (array.lengtht===0 || array.length===1) {
    return "null";
  }
 return array.filter((i)=>i!==Math.max(...array) && i!== Math.min(...array)).reduce((acc,current)=>acc+current,0);
 return array;
}

console.log(sumArray([2,9,5,1,11]));//2
console.log(sumArray([6]));//null