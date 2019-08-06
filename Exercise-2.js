function fpb(angka1, angka2) {
  var pembagiAngka1 = [];
  var pembagiAngka2 = [];
  var persamaan = [];
  for (i = 0; i < angka1; i++) {
    if (angka1 % i === 0) {
      pembagiAngka1.push(i);
    }
  }
  for (i = 0; i < angka2; i++) {
    if (angka2 % i === 0) {
      pembagiAngka2.push(i);
    }
  }
  for (i = 0; i < pembagiAngka1.length; i++) {
    for (j = 0; j < pembagiAngka2.length; j++) {
      if (pembagiAngka1[i] === pembagiAngka2[j]) {
        persamaan.push(pembagiAngka1[i]);
      }
    }
  }
  var hasil = persamaan[persamaan.length-1]
  return hasil;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
