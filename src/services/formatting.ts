/**
 * Capitalizes the first letter of a string.
 *
 * @param str - The string to capitalize.
 * @returns - The capitalized string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a number to a string and formats it with commas.
 * @param num - The number to format.
 * @return - The formatted string.
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

/**
 * Formats a slug to a human-readable string.
 *
 * @param slug - The slug to format
 * @returns - The formatted slug
 */
export function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => capitalize(word))
    .join(" ");
}
