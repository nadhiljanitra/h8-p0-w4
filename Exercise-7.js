function urutkanAbjad(str) {
  var strArr = []
  for (i=0;i<str.length;i++){
      strArr.push(str[i])
  }
  var hasil=strArr.sort().join('')
  return hasil;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'