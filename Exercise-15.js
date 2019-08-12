function highestScore(students) {
  var result = {};
  // bikin object result yang sudah ada class nya
  for (i = 0; i < students.length; i++) { 
    result[students[i].class] = {};
  }

  // bikin object untuk masing masing class pada result
  for (i = 0; i < students.length; i++) { 
    for (animal in result) {
      if (animal === students[i].class) {
        result[animal].name = students[i].name;
        result[animal].score = students[i].score;
      }
    }
  }

  // mengganti nilai score dan name untuk score yang paling tinggi pada setiap class nya
  for (i = 0; i < students.length; i++) { 
    for (animal in result) {
      if (animal === students[i].class) {
        if (students[i].score > result[animal].score) {
          result[animal].name = students[i].name;
          result[animal].score = students[i].score;
        }
      }
    }
  }
  return result;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}