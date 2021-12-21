const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))),[[]]);
console.log(powerset([1, 2, 3]));