function digitPerkalianMinimum(angka) {
  var hasil = [];
  var digit = [];
  for (i = 0; i < angka+1; i++) {
    for (j = angka; j > 0; j--) {
      var perkalian = i * j;
      if (perkalian === angka) {
        hasil.push(`${i}` + `${j}`);
      }
    }
  }
  for (i = 0; i < hasil.length; i++) {
    digit.push(hasil[i].length);
  }
  digit.sort();
  return digit[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


