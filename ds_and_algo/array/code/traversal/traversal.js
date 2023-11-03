const array = [1, 2, 3, 4, 5, 6];
const lengthOfTheArray = array.length;

// with simple for loop
for (index = 0; index < lengthOfTheArray; index++) {
  console.log(array[index]);
}

// with inbuilt Array object method foreach
array.forEach(element => {
  console.log(element);
});