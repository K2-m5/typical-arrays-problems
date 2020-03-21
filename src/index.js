
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
      minValue = 0;
  } else {
      minValue = array[0];
      for (let j = 0; j < array.length; j++) {
          if (minValue > array[j]) {
              minValue = array[j];
          }
      }
  }
  return minValue;
};

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
} else {
    let maxValue = array[0];
    for (let j = 0; j < array.length; j++) {
        if (maxValue < array[j]) {
          maxValue = array[j];
        }
    }
    return maxValue;
  }
};

exports.avg = function avg (array) {
  let sum = 0;
  if (array === undefined || array.length === 0) {
      return 0;
  } else {
      for(let i = 0; i < array.length; i++) {
          sum += array[i];
      }
      return avgValue = sum/array.length;
  }
};
