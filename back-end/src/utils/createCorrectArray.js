module.exports = (allProducts, saleId) => {
  return allProducts.map(({ id: productId, productQnt }) => ({
    sale_id: saleId,
    product_id: productId,
    quantity: productQnt,
  }));
};
