// Task_1
type typeOfArg = number | string | boolean;
function isInArray(firstArg: typeOfArg[], ...restOfArg: typeOfArg[]): boolean {
    restOfArg.filter(function (item): void | boolean {
        if (firstArg.indexOf(item) === -1) {
            return false;
        }
    });
    return true;
}

// Test for task_1
isInArray([5, 3, 7, 8, 10], 6, 8, 9, 10);
isInArray([5, 'a', 9, 8, 10], 'a', 8, 9, 10);
isInArray(['a', 'b', 'c', 'd', 'e'], 'a', 'b', 'c', 'd');

// Task_2
function summator(...theArgs: (number | string)[]): (number | string) {
    let result: number | string = 0 || '';
       if (typeof theArgs[0] === 'string') {
           result = '';
           for (const item of theArgs) {
               result += item;
           }
       }
       if (typeof theArgs[0] === 'number') {
           result = 0;
           for (const item of theArgs) {
               result += parseInt(item.toString());
           }
       }
    return result;
   }
// Test for task_2
// tslint:disable-next-line
console.log(summator(1, 1, 1, 3));
// tslint:disable-next-line
console.log(summator('b', 'i', 'r', 'd'));