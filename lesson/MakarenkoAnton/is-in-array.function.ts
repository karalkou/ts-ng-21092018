type ALMOSTANY = (string|number|boolean|symbol|object);

// QUESTION: is it OK to mix type declaration (side-effect) and function declaration in one file?

function isInArray(haystack: ALMOSTANY[], first: ALMOSTANY, ...needles: ALMOSTANY[]): boolean {
    const all = [].concat([first], needles);
    for (const el of all) {
        if (haystack.indexOf(el) === -1) {
            return false;
        }
    }
    return true;
}
