function ubahHuruf(kata) {
  var split = kata.split("");
  for (i = 0; i < split.length; i++) {
    switch (split[i]) {
      case "a":
        split[i] = "b";
        break;
      case "b":
        split[i] = "c";
        break;
      case "c":
        split[i] = "d";
        break;
      case "d":
        split[i] = "e";
        break;
      case "e":
        split[i] = "f";
        break;
      case "f":
        split[i] = "g";
        break;
      case "g":
        split[i] = "h";
        break;
      case "h":
        split[i] = "i";
        break;
      case "i":
        split[i] = "j";
        break;
      case "j":
        split[i] = "k";
        break;
      case "k":
        split[i] = "l";
        break;
      case "l":
        split[i] = "m";
        break;
      case "m":
        split[i] = "n";
        break;
      case "n":
        split[i] = "o";
        break;
      case "o":
        split[i] = "p";
        break;
      case "p":
        split[i] = "q";
        break;
      case "q":
        split[i] = "r";
        break;
      case "r":
        split[i] = "s";
        break;
      case "s":
        split[i] = "t";
        break;
      case "t":
        split[i] = "u";
        break;
      case "u":
        split[i] = "v";
        break;
      case "v":
        split[i] = "w";
        break;
      case "w":
        split[i] = "x";
        break;
      case "x":
        split[i] = "y";
        break;
      case "y":
        split[i] = "z";
        break;
      case "z":
        split[i] = "a";
        break;
    }
  }
  var kataBaru=split.join('');
  return kataBaru;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
