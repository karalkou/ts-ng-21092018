// QUESTION: I don't know how to run this. Syntactically seems correct, but unable to execute via node
import './is-in-array.function';
import './summator.function';
import './get-unique.function';
import './to-matrix.function';

// QUESTION: what is the proper way to execute this, since console.log() is not recommended?

// isInArray([]); // not gonna work, missing mandatory 2nd parameter
isInArray([], 1);
isInArray([], 1, 2);
isInArray(['foo', 'bar'], 'foo');

// summator(); // not allowed, must have at least 1
// summator(1, 'foo', 'bar'); // not allowed, must have all either number or all string
summator(1, 2, 3);
summator('foo', 'bar', 'baz');

// getUnique(); // not allowed, must have at least 1
getUnique([1, 2, 3], [1, 3, 5], [8, 13]); // [1, 2, 3, 5, 8, 13]
const a = {};
const b = {};
const c = {};
getUnique([a, b], [b, c]); // [a, b, c]


// toMatrix(); // nope
// toMatrix([1, 2, 3]); // nope
toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11]]
