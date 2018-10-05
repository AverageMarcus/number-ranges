import test from 'ava';
import { explodeRange, stringToArray, arrayToString } from '.';

const explodeRangeMacro = (t, input: string, expected: number[]) => {
  t.deepEqual(explodeRange(input), expected);
};

test('explodeRange should handle standard range', explodeRangeMacro, '1-5', [1, 2, 3, 4, 5]);
test('explodeRange should handle single value range', explodeRangeMacro, '1-1', [1]);
test('explodeRange should handle single value', explodeRangeMacro, '1', [1]);
test('explodeRange should handle spaces', explodeRangeMacro, ' 1 - 5 ', [1, 2, 3, 4, 5]);
test('explodeRange should handle trailing dash', explodeRangeMacro, '1-', [1]);
test('explodeRange should handle prepended dash', explodeRangeMacro, '-1', [1]);

const stringToArrayMacro = (t, input: string, expected: number[]) => {
  t.deepEqual(stringToArray(input), expected);
};

test('stringToArray should handle standard range', stringToArrayMacro, '1-5', [1, 2, 3, 4, 5]);
test('stringToArray should handle single value range', stringToArrayMacro, '1-1', [1]);
test('stringToArray should handle single value', stringToArrayMacro, '1', [1]);
test('stringToArray should handle spaces', stringToArrayMacro, ' 1 - 5 ', [1, 2, 3, 4, 5]);
test('stringToArray should handle multiple ranges', stringToArrayMacro, '1-5,9-10', [1, 2, 3, 4, 5, 9, 10]);
test('stringToArray should handle multiple individual values', stringToArrayMacro, '1,3,5,7,9', [1, 3, 5, 7, 9]);
test('stringToArray should sort the resulting array', stringToArrayMacro, '3,2,1', [1, 2, 3]);
test('stringToArray should remove duplicates', stringToArrayMacro, '1,2,2,3,3,3', [1, 2, 3]);
test('stringToArray should handle shuffled values', stringToArrayMacro, '3,2,6,1,5,4', [1, 2, 3, 4, 5, 6]);


const arrayToStringMacro = (t, input: number[], expected: string) => {
  t.deepEqual(arrayToString(input), expected);
};

test('arrayToString should handle standard range', arrayToStringMacro, [1, 2, 3, 4, 5], '1-5');
test('arrayToString should handle multiple ranges', arrayToStringMacro, [1, 2, 3, 5, 6, 7], '1-3,5-7');
test('arrayToString should handle all individual values', arrayToStringMacro, [1, 3, 5, 7], '1,3,5,7');
test('arrayToString should handle a mix of ranges and individual values', arrayToStringMacro, [1, 2, 3, 5, 7, 10, 11, 12], '1-3,5,7,10-12');
test('arrayToString should handle unordered array', arrayToStringMacro, [5, 7, 3, 4, 1], '1,3-5,7');
test('arrayToString should handle duplicates', arrayToStringMacro, [1, 2, 2, 3, 3, 3], '1-3');
test('arrayToString should handle two digit ranges', arrayToStringMacro, [1, 2, 4, 5, 6, 7], '1,2,4-7');
