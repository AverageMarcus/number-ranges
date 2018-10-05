export const arrayToString = (arr: number[]): string => {
  return [...new Set(arr)].sort((a, b) => a - b)
    .map((current: any, i, arr) => {
      const previous = arr[i-1];
      const next = arr[i+1];

      if (!previous || !next) {
        return current;
      }

      if (current === previous + 1 && current === next - 1) {
        return '-';
      }

      return current;
    })
    .reduce((str, current, i, arr) => {
      const previous = arr[i-1];
      const next = arr[i+1];

      if (current !== previous) {
        if (current !== '-' && next !== '-' && next !== undefined) {
          str += current + ',';
        } else {
          str += current;
        }
      }

      return str;
    }, '');
};

export const stringToArray = (str: string): any => {
  return [...new Set(
    str.replace(/[^0-9,\-]/g, '')
      .split(',')
      .filter(i => !!i)
      .map(explodeRange)
      .join(',')
      .split(',')
      .map(i => parseInt(i, 10))
      .sort((a: number, b: number) => a - b)
    )];
};

export const explodeRange = (str: string): number[] => {
  str = str.trim();
  if (str.includes('-')) {
    const range: number[] = [];
    let [ start, end ] = str.split('-').map(i => parseInt(i.trim()));
    if (isNaN(start) || isNaN(end)) {
      range.push(start || end);
    } else {
      do {
        range.push(start);
      } while (start++ < end)
    }
    return range;
  }else {
    return [parseInt(str)];
  }
};
