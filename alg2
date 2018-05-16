// PART 1
//Q1
function multiply(x,y){
    console.log(x);
    console.log(y);
}
multiply(2,3);
console.log(multiply(2,3));
// OUTPUT: 2,3,2,3

//Q2
function multiply(x,y){
    return x*y;
}
multiply(2,3);
console.log(multiply(3,4));
// OUTPUT: 12


//Q3
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
//OUTPUT: 3,7

//Q4
x=15;
console.log(x);
function awesome(){
    x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
// OUTPUT: 15,15,10,15

// Q5
for(var i=0; i<15; i+=2){
    console.log(i);
 }
//  OUTPUT: 0,2,4,6,8,10,12,14

// Q6
for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){       
        console.log(i*j);
    }
 }
//  OUTPUT:0,0,0,1,0,2

// Q7
function looping(x,y){
    for(var i=0; i<3; i++){
       for(var j=0; j<3; j++){         
           console.log(i*j);
       } 
    }
 }
 z = looping(3,3);
 console.log(z);
//  OUTPUT: 0,0,0,0,1,2,0,2,4

// Q8
function looping(x,y){
    for(var i=0; i<3; i++){
       for(var j=0; j<5; j++){         
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);
//  OUTPUT: 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15


// PART 2
// Print 1 to x
function printUpTo(x){
    if (x < 0) {
        console.log("negative number");
        return false;
    }
    for (var i = 1; i <= x; ++i) {
        console.log(i);
    }
  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false

//   PrintSum
  function printSum(x){
    sum = 0;
    for (var i = 0; i <= x; ++i) {
        console.log(i);
        sum += i;
    }
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32385

//   PrintSumArray
  function printSumArray(x){
    sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6

//   Return largest element in the array
function minfind(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
