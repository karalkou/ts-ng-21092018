function summator(first: number, ...args: number[]): number;
function summator(first: string, ...args: string[]): string;

function summator(first, ...args: []) {
    let result = first;
    for (const arg of args) {
        result += arg;
    }
    return result;
}
