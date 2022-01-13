const router = require('express').Router();
const SalesController = require('../controller/SalesController');

router.post('/customer/sell', SalesController.createSale);

module.exports = router;


const createSale = async (body) => {
    const { userId, sellerId, products, deliveryNumber, deliveryAddress } = body;
    // try {
    //   tokenValidation.tokenFieldValidation(authorization);
    //   createSaleValidatiton.validPostFields({ title, content, categoryIds });
    //   await verifyCategoryExists(categoryIds);
    //   const { id: userId } = createSaleValidatiton.getUserFromToken(authorization);

      const createdProductd = await BlogPosts.create({
        userId, sellerId, deliveryNumber, deliveryAddress
      });

      const { id: saleId } = createdProductd;
  
      await products.forEach(async ({ id, productQnt }) => {
        await PostsCategories.create({ /* saleId, */ product_id: id, quantity: productQnt });
      });
      return response;
    // } catch (e) {
      // return { error: { message: e.message, code: e.code } };
    // }
  };