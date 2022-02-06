const array = [12, 23, 13, 14, 65, 8];

//cb - shot name of callback
const myForEach = (array, cb) => {
  for (let i = 0; i < array.length; i += 1) {
    cb(array[i], i, array);
  }
}

const callBackFunct = (item, index, array) => {
  console.log('element of array:', item, 'index of array:', index, 'array:', array);
}

myForEach(array, callBackFunct);
