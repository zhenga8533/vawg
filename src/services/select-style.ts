/**
 * Compares the current item with the selected item and returns the style object.
 *
 * @param {any} current - The current item
 * @param {any} selected - The selected item
 * @returns {object} The style object
 */
const getStyle = (current: any, selected: any): object => {
  if (current === selected) {
    return {
      fontWeight: "bold",
      textColor: "blue.500",
    };
  }
  return {};
};

export default getStyle;
