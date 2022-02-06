const array1 = [12, 23, 13, 14, 65, 8];
const array2 = ['s', 'd', 'r', 'u5', 'w', 'stop'];
const array3 = ['p', 'd', 'h', 1, 2, 3];

const myConcat = (...array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[0].length; j += 1) {
      newArray.push(array[i][j]);
    }
  }
  return newArray;
}

console.log(myConcat(array1, array2, array3));