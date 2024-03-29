function shoppingTime(memberId, money) {
  var hargaBarang = [1500000, 500000, 250000, 175000, 50000];
  var listBarang = [
    "Sepatu Stacattu",
    "Baju Zoro",
    "Baju H&N",
    "Sweater Uniklooh",
    "Casing Handphone"
  ];
  var barangDibeli = [];
  var uangSisa = money;

  if (memberId === "") {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else if (memberId === undefined && money === undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  for (var i = 0; i < hargaBarang.length; i++) {
    if (uangSisa >= hargaBarang[i]) {
      uangSisa = uangSisa - hargaBarang[i];
      barangDibeli.push(listBarang[i]);
    }
  }
  var data = {
    memberId: `${memberId}`,
    money: money,
    listPurchased: barangDibeli,
    changeMoney: uangSisa
  };
  return data;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Mca742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja
