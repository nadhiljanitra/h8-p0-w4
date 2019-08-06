function cariMedian(arr) {
    var median = 0
  if (arr.length%2 !== 0){
    var  indexMedian = Math.floor(0.5*arr.length)
    median = arr[indexMedian]
  } else {
    var indexTengah=arr.length/2
    median = ((arr[indexTengah-1])+(arr[indexTengah]))/2
  }

 return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5