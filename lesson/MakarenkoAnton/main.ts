import './is-in-array.function'; // QUESTION: is this kind of import good enough or we need more elaborate structure?
import './summator.function';

// isInArray([]); // not gonna work, missing mandatory 2nd parameter
isInArray([], 1);
isInArray([], 1, 2);
isInArray(['foo', 'bar'], 'foo');

// summator(); // not allowed, must have at least 1
// summator(1, 'foo', 'bar'); // not allowed, must have all either number or all string
summator(1, 2, 3);
summator('foo', 'bar', 'baz');
