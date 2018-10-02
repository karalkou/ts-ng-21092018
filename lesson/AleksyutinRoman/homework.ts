function isInArray<T>(array: T[], ...rest: T[]): boolean {
    return rest.every(element => array.includes(element));
}

function summator(...rest: (string | number)[]): number {
    return rest.reduce<number>((sum: number, current: string | number) => sum + parseInt(current as string, 10), 0);
}

function getUnique<T>(...rest: T[]): T[] {
    const uniqueArr = new Set(rest);
    return Array.from(uniqueArr);
}

function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const newData: T[][] = [];
    const subArr: T[] = data.slice(0, rowSize);
    data.forEach(() => newData.push(subArr));
    return newData;
}