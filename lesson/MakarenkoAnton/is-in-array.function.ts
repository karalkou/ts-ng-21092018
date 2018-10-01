type PRIMITIVE = (string|number|boolean|symbol|object);

// QUESTION: is it OK to mix type declaration (side-effect) and function declaration in one file?

function isInArray(haystack: PRIMITIVE[], first: PRIMITIVE, ...needles: PRIMITIVE[]): boolean {
    const all = [].concat([first], needles);
    for (const el of all) {
        if (haystack.indexOf(el) === -1) {
            return false;
        }
    }
    return true;
}
