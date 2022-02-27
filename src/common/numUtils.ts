import numeral from 'numeral';

export function isInteger(x: number): boolean {
  return typeof x === 'number' && Number.isFinite(x) && Math.floor(x) === x;
}
export function isFloat(x: number): boolean {
  return !!(x % 1);
}

export function numFormat(num: number): string {
  const format = isInteger(Number(num)) ? '0,0' : '0,0.00';
  return numeral(num).format(format);
}
