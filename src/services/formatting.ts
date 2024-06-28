/**
 * Converts a number to a string and formats it with commas.
 * @param {number} num - The number to format.
 * @return {string} The formatted string.
 */
export function commafy(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Formats a date string in YYYY-MM-DD format to MON DD, YYYY format.
 *
 * @param date - Date in YYYY-MM-DD format
 * @returns - Date in MON DD, YYYY format
 */
export function formatDate(date: string): string {
  return new Date(date)
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}
