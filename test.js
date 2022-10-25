number = [1, 2, 3, 1, 8, 1];
count = countOccurrences1(number, 2);
console.log("count = ", count);

function countOccurrences1(array, searchElemant) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElemant;
    //console.log(accumulator, current, searchElemant);
    return accumulator + occurrence;
  }, 0);
}
