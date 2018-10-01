function isInArray(
    haystack: (string|number|boolean|symbol|object)[],
    needle: (string|number|boolean|symbol|object),
    ...needles: (string|number|boolean|symbol|object)[]
): boolean {
    const all = [].concat([needle], needles);
    for (const el of all) {
        if (haystack.indexOf(el) === -1) {
            return false;
        }
    }
    return true;
}
