// QUESTION: the ALMOSTANY type is defined in a different function/file. Not gonna work without main.ts - is this OK?

function getUnique(arr: ALMOSTANY[], ...moreArrays: ALMOSTANY[]): ALMOSTANY[] {
    const result: ALMOSTANY[] = [];
    let fullList: ALMOSTANY[] = [].concat(arr);

    for (const nextArr of moreArrays) {
        fullList = fullList.concat(nextArr);
    }

    for (const el of fullList) {
        if (!isInArray(result, el)) {
            result.push(el);
        }
    }

    return result;
}
