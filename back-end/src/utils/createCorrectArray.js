module.exports = (allProducts, saleId) => allProducts.map(({ id: productId, productQnt }) => ({
  saleId,
  productId,
  quantity: productQnt,
}));
