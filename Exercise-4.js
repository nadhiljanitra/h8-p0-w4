function cariModus(arr) {
    console.log(arr)
 var pengelompokan = [];
 var sementara = [];
 var jumlah = []
//  console.log(arr)
 for (i=0;i<arr.length;i++){
    //  console.log(i)
     if (pengelompokan.length < 1){
         pengelompokan.push(arr[i])
         sementara.push([arr[i]])
        //  console.log(pengelompokan)
        //  console.log(i)
     } else {
         var check = true
         for (j=0;j<pengelompokan.length;j++){
             if (pengelompokan[j]===arr[i]){
                 var index=j
                 check = false
             }
            }
             if (check){
                 pengelompokan.push(arr[i])
                 sementara.push([arr[i]])
             } else {
                //  console.log(arr[1])
                //  console.log(index,'index');
                 sementara[index].push(arr[i])
             }
         
     }
 }
 if (sementara.length===arr.length || sementara.length === 1){
     return -1
    } 
    console.log(pengelompokan)
    console.log(sementara);
 jumlah = sementara.sort(function(a,b){return a.length<b.length})
 var modus = sementara[0][0]
 console.log(jumlah)
 return modus;
}



// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1