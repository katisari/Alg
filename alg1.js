// QUESTION 1
var x = [1,2,3,4,5,10]
for(var i=0; i<5;i++){   
   console.log(i);
}

// OUTPUT: 1,2,3,4


// QUESTION 2
var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}
/* T Diagram: 
   i = 0,1,2,3,4,5,6
 */
// OUTPUT: 1,3,5

// QUESTION 3
var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
/* T Diagram: 
   i = 0,3,4,7,8
 */
// OUTPUT: 3,7


// QUESTION 4
function y(num1, num2){    
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 // OUTPUT: 5,8


 // QUESTION 5
 function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))

// OUTPUT: 2,5,3,8


// QUESTION 6
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);
// OUTPUT: 15,10,10

// QUESTION 7
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);
// OUTPUT: 15,10,20
