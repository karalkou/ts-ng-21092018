///// HW1
function isInArray<T>(array: T[], ...values: T[]): boolean {
  return !values.some((elem: T) => {
    return (
      array.findIndex((cur: T) => {
        return cur === elem;
      }) === -1
    );
  });
}

///// HW2
function summator(...values: (string | number)[]): number {
  function isNumber(element: string | number) {
    return typeof element === 'number';
  }
  let result = 0;
  values.forEach((elem: string | number) => {
    if (isNumber(elem)) {
      result += +elem;
    } else {
      const val = Number(elem);
      if (!isNaN(val)) {
        result += val;
      }
    }
  });
  return result;
}

///// HW3
function getUnique<T>(array: T[]): T[] {
  const unique: T[] = [];
  array.forEach(elem => {
    if (unique.indexOf(elem) < 0) {
      unique.push(elem);
    }
  });
  return unique;
}

///// HW4
function toMatrix<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  const length = array.length;
  let index = 0;
  while (index < length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}
