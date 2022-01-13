const db = require("../../database/models");

class SalesController {
  static async createSale(req, res) {
    // const newUser = { ...req.body, password: md5(req.body.password) };
    // try {
    //   const created = await db.users.create(newUser);
    //   const { id, name, email, role } = created;
    //   const token = JWTgenerate({ id, name, email, role });
    //   return res.status(201).json({
    //     name, email, role, token });
    // } catch (e) {
    //   return res.status(400).json(e.message);
    // }

    // .1 userId
    // .7 sellerId
    // .2 products
    // .3 deliveryNumber
    // .4 deliveryAddress
    const newSale = { ...req.body };
    const { token } = req.headers.authorization;

    try {
      // const createSale = await db.sales.create(newSale);
      const createSale = async () => {
        const { userId, sellerId, products, deliveryNumber, deliveryAddress } = newSale;
        // try {
        //   tokenValidation.tokenFieldValidation(authorization);
        //   createSaleValidatiton.validPostFields({ title, content, categoryIds });
        //   await verifyCategoryExists(categoryIds);
        //   const { id: userId } = createSaleValidatiton.getUserFromToken(authorization);
    
          const createdProductd = await sales.create({
            userId, sellerId, deliveryNumber, deliveryAddress
          });

          // const { id: saleId } = createdProductd;
      
          await products.forEach(async ({ id, productQnt }) => {
            await PostsCategories.create({ /* saleId, */ product_id: id, quantity: productQnt });
          });
          return response;
        // } catch (e) {
          // return { error: { message: e.message, code: e.code } };
        // }
      };
    } catch (error) {
      
    }

    // Informacoes que serao atribuidas automaticamente
    // .5 date
    // .6 Status do pedido = 'pendente'
    
    // const chosenProducts = req.body;

    try {
      // const result = await db.sales.create();
      return res.status(201).json({ message: 'Sale created successfully' });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
  // static async getSaleById(req, res) {};
}

module.exports = SalesController;