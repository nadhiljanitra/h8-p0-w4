function checkAB(num) {
  var arr = []
  var jumlahA = 0
  var jumlahB = 0
  var index_A = []
  var index_B = []
  var jarak = []
  arr = num.split('')

  for (i=0;i<arr.length;i++){ // menghitung jumlah A dan B
    if (arr[i]==='a'){
      jumlahA += 1
    } else if (arr[i]==='b'){
      jumlahB += 1
    }
  }
  if (jumlahA === 0 || jumlahB === 0){
    return false;
  }
  for (i=0;i<jumlahA;i++){ // mencatat posisi A
    if (i === 0){
      index_A[i] = num.indexOf('a')
    } else {
      index_A[i] = num.indexOf('a',index_A[i-1]+1)
    }
  }
  for (i=0;i<jumlahB;i++){ // mencatat posisi B
    if (i === 0){
      index_B[i] = num.indexOf('b')
    } else {
      index_B[i] = num.indexOf('b',index_B[i-1]+1)
    }
  }
  for (i=0;i<jumlahA;i++){ // mencari jarak AB
    for(j=0;j<jumlahB;j++){
      if (index_A[i]>index_B[j]){
        jarak.push((index_A[i]-index_B[j])-1)
      } else{
        jarak.push((index_B[j]-index_A[i])-1)
      }
    }
  }
  for (i=0;i<jarak.length;i++){
    if (jarak[i] === 3){
      return true;
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false