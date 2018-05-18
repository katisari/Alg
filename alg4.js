// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterthanY(arr, Y) {
    var counter = 0;
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] > Y) {
            ++counter;
        }
    }
    console.log(counter);
}


// Given an array, print the max, min and average values for that array.
function printing(arr) {
    var sum = arr[0];
    var min = arr[0];
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum / arr.length);
}


// Given an array of numbers, create a function that returns a new array where negative values 
// were replaced with the string ‘Dojo’.   
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegatives(arr) {
    var newarray = arr;
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] < 0) {
            newarray[i] = "Dojo";
        }
    }
    return newarray;
}


// Given array, and indices start and end, remove vals in that index range, working in-place 
// (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr, start, end) {
    var numpop = end - start + 1;
    for (var i = end + 1; i < arr.length; ++i) {
        var j = start;
        arr[j] = arr[i];
        ++j;
    }
    for (var num_pop = 0; num_pop < numpop; ++num_pop) {
        arr.pop();
    }
    return arr;
}
