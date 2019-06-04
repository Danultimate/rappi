export const formatPrice = (price) => {
  return parseFloat(
    price.substring(1, price.length).replace(',', '')
  );
};
