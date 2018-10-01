function isInArray<T>(array: T[], ...rest: T[]): boolean {
    return rest.every(element => array.includes(element));
}

function summator(...rest: (string | number)[]): number {
    return rest.reduce<number>((sum: number, current: string | number) => sum + parseInt(current as string, 10), 0);
}