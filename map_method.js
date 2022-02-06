const array = [12, 23, 13, 14, 65, 8];

//cb - shot name of callback
const myMap = (array, cb) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(cb(array[i], i, array));
  }
  return newArray;
}

const callBackFunct = (item, index, array) => {
  return item + 3;
}

console.log(myMap(array, callBackFunct));

console.log(myMap(array, (item) => item ** 2));

console.log(myMap(array, (item, index, array) => item + index + array.length));
