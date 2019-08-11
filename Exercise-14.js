function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var result = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var rekap = {
      penumpang: "",
      naikDari: "",
      tujuan: "",
      bayar: 0
    };
    rekap.penumpang = arrPenumpang[i][0];
    rekap.naikDari = arrPenumpang[i][1];
    rekap.tujuan = arrPenumpang[i][2];
    rekap.bayar = (rute.indexOf(rekap.tujuan) - rute.indexOf(rekap.naikDari)) * 2000;
    result.push(rekap);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
