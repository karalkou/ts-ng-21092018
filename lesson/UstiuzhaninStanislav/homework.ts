function isInArray<T>(array: T[], ...rest: T[]): boolean {
  return rest.every(element => array.indexOf(element) !== -1);
}

console.log('isInArray', isInArray([1, 'a', 3, 'b'], 1, 'b'));

type numberOrString = string | number;
function sum(a: numberOrString, b: numberOrString): numberOrString {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

function summator(...args: numberOrString[]): numberOrString {
  const initialValue = typeof args[0] === 'number' ? 0 : '';
  return args.reduce((acc, currentValue) => sum(acc, currentValue), initialValue);
}

console.log('summator', summator(1, 2, 3, 4), ' ', summator('a', 'b', 'c', 'd'));

function getUnique<T>(arr: T[]): T[] {
  return arr.reduce((acc: T[], element: T): T[] => {
    if (acc.indexOf(element) === -1) {
      return [...acc, element];
    }
    return acc;
  }, []);
}

console.log('getUnique', getUnique([1, 2, 'a', 'b', 2 , 'c', 'a', 3, 'b']));

function toMatrix<T>(data: T[], rowSize: number): T[][] {
  const result: T[][] = [];
  let utilityArray: T[] = [];
  data.forEach((element: T, index: number) => {
    if (index % rowSize === 0) {
      utilityArray = [];
    }
    utilityArray.push(element);
    if (utilityArray.length === rowSize || index === (data.length - 1)) {
      result.push(utilityArray);
    }
  });
  return result;
}

console.log('toMatrix', toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
console.log('toMatrix', toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log('toMatrix', toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log('toMatrix', toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
