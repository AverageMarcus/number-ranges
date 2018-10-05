# number-ranges

> Handle converting a range of numbers between arrays and string

Converts to/from an array of numbers to a string combining consecutive ranges. e.g. `[1, 2, 3, 4]` becomes `1-4`.

## Install

```
$ npm install @averagemarcus/number-ranges
```

## Usage

```js
import numberRanges from 'number-ranges';

console.log(numberRanges.arrayToString([1, 2, 3, 4, 5]));
//=> `1-5`

console.log(numberRanges.stringToArray('1-5,8,10'));
//=> `[1, 2, 3, 4, 5, 8, 10]`
```

## Browser support

The latest version of Chrome, Firefox, Edge, and Safari as well as Node.js.


## Maintainers

- [Marcus Noble](https://github.com/AverageMarcus)


## License

MIT
