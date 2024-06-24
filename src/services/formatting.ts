/**
 * Converts a number to a string and formats it with commas.
 * @param {number} num - The number to format.
 * @return {string} The formatted string.
 */
export function commafy(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
