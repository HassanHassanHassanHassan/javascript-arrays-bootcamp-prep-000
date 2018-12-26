var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

<<<<<<< HEAD
function destructivelyAddElementToEndOfArray(array, element ) {
=======
function destructivelyAddElementToEndOfArray(array, element) {
>>>>>>> f1b2a0bb0e7679c38b7e3ae844f2db74982dd79e
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  array.shift()
  return array}
=======
  array.shift(0)
  array}
>>>>>>> f1b2a0bb0e7679c38b7e3ae844f2db74982dd79e

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array}
  
<<<<<<< HEAD
=======


>>>>>>> f1b2a0bb0e7679c38b7e3ae844f2db74982dd79e
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)}

function accessElementInArray(array, index) {
  return array[index]}



