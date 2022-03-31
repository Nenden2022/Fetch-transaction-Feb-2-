/** test array */

function func(array) {
  const len = array.length;
  for (let i = 0; i < len - 1; i++)
    for (let j = i + 1; j < len; j++)
      if (array[i] < array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  array.push(7);
}

async function main() {
  const array = [1, 2, 6, 4, 5];
  func(array);
  console.log(array);
}

main();
