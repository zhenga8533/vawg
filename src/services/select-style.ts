const getStyle = (current: any, selected: any) => {
  if (current === selected) {
    return {
      fontWeight: "bold",
      textColor: "blue.500",
    };
  }
  return {};
};

export default getStyle;
