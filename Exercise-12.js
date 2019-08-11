function countProfit(shoppers) {
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];

  var arr = [];
  var dataStock = [];
  if (shoppers == false) {
    return arr;
  }

  // bikin objek dataStock dari listBarang
  for (i = 0; i < listBarang.length; i++) {
    var stock = {
      product: "",
      leftOver: 0,
      profit: 0,
      jumlahAwal: 0
    };
    stock.product = listBarang[i][0];
    stock.leftOver = listBarang[i][2];
    stock.profit = listBarang[i][1];
    stock.jumlahAwal = listBarang[i][2];
    dataStock.push(stock);
  }

  // bikin objek untuk result yang merupakan hasil transaksi
  for (i = 0; i < dataStock.length; i++) {
    var result = {
      product: "",
      shoppers: [],
      leftOver: 0,
      totalProfit: 0
    };
    result.product = dataStock[i].product;
    arr.push(result);
  }
  for (i = 0; i < shoppers.length; i++) {
    for (j = 0; j < dataStock.length; j++) {
      if (
        shoppers[i].product === dataStock[j].product &&
        shoppers[i].amount <= dataStock[j].leftOver
      ) {
        arr[j].leftOver = dataStock[j].leftOver - shoppers[i].amount;
        dataStock[j].leftOver = arr[j].leftOver;
        arr[j].shoppers.push(shoppers[i].name);
      }
      arr[j].totalProfit =
        (dataStock[j].jumlahAwal - dataStock[j].leftOver) * dataStock[j].profit;
      arr[j].leftOver = dataStock[j].leftOver;
    }
  }
  return arr;
}

// TEST CASES
console.log(countProfit([{ name: "Windi", product: "Sepatu Stacattu", amount: 2 },{ name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },{ name: "Rani", product: "Sweater Uniklooh", amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
