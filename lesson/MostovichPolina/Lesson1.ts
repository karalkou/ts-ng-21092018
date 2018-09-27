// Task_1
function isInArray(firstArg: (number | string)[], ...restOfArg: (number | string)[]): boolean {
    let count: number = 0;
    restOfArg.filter(value => {
        if (firstArg.indexOf(value) !== -1) {
            count++;
        }
    });
    if (restOfArg.length === count) {
        return true;
    } else {
        return false;
    }
}
// Test for task_1
isInArray([5, 3, 7, 8, 10], 6, 8, 9, 10);
isInArray([5, 'a', 9, 8, 10], 'a', 8, 9, 10);
isInArray(['a', 'b', 'c', 'd', 'e'], 'a', 'b', 'c', 'd');
