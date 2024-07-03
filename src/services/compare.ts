/**
 * Compares two objects to determine if they are different.
 *
 * @param obj1 - The first object to compare
 * @param obj2 - The second object to compare
 * @returns - True if the objects are different, false otherwise
 */
export function compareObjects(obj1: any, obj2: any): boolean {
  return Object.entries(obj1).some(([key, value]) => obj2[key] !== value);
}
