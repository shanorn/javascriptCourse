// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* Solving Problems 
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent taks is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperatue amplitud? Answe: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Sustract min from max (amplitude) and return it;

const calcTempAmplitud = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max, max - min);

  return max - min;
};

const amplitude = calcTempAmplitud(temperatures);

// PROBLEM: 2
// Functions should receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice ? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(min, max, max - min);

  return max - min;
};

const amplitudeNew = calcTempAmplitudNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/* Debugging with the console and breakpoints 
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius: ')),
  };
  console.log(measurement);
  // console.log(measurement.value, typeof measurement.value);
  // console.warn(measurement.value, typeof measurement.value);
  // console.error(measurement.value, typeof measurement.value);
  // B) FIND
  console.table(measurement);
  debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
*/
