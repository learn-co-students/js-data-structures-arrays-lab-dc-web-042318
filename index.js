// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const moreDrivers = [...drivers, name];
  return moreDrivers;
}

function prependDriver(name) {
  const evenMoreDrivers = [name, ...drivers];
  return evenMoreDrivers;
}

function removeLastDriver() {
  const lessDrivers = drivers.slice(0,-1);
  return lessDrivers;
}

function removeFirstDriver() {
  const evenLessDrivers = drivers.slice(1,drivers.length);
  return evenLessDrivers;
}


