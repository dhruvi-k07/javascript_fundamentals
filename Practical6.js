const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = function (arr) {
  const obj = {};
  for (const val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }
  //console.log(obj);
  const unique = [];
  for (const key in obj) {
    if (obj[key] === 1) {
      unique.push(key);
    }
  }
  console.log(unique);
};
unique(arr);