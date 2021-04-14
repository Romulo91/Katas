// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// first solution

function humanReadable(seconds) {
  let sec = seconds;
  let hours = Math.floor(sec / 3600);
  let min = Math.floor((sec - hours * 3600) / 60);
  let seco = sec - hours * 3600 - min * 60;

  hours < 10 ? (hours = "0" + hours) : hours;
  min < 10 ? (min = "0" + min) : min;
  seco < 10 ? (seco = "0" + seco) : seco;

  return `${hours}:${min}:${seco}`;
}

// sec solution

function humanReadable(seconds) {
  let sec = seconds;
  let hours = Math.floor(sec / 3600);
  let min = Math.floor((sec - hours * 3600) / 60);
  let seco = sec - hours * 3600 - min * 60;

  var time = function (val) {
    return val < 10 ? "0" + val : val;
  };

  return time(hours) + ":" + time(min) + ":" + time(seco);
}
