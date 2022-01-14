const db = require("../../database/models");


const createCorrectArray = (allProducts, saleId) => {
  return allProducts.map(({ id: productId, productQnt }) => ({
    sale_id: saleId,
    product_id: productId,
    quantity: productQnt,
  }));
};

class SalesController {
  static async createSale(req, res) {
    const { userId, sellerId, products, deliveryNumber, deliveryAddress, totalPrice } = req.body;
    let currentIdSale;

    try {
        const saleResult = await db.sales.create(
          {
            user_id: userId,
            seller_id: sellerId,
            delivery_address: deliveryAddress,
            delivery_number: deliveryNumber,
            total_price: parseFloat(totalPrice),
          }
        );

        const { id } = saleResult;
        currentIdSale = id;
       
          const formatedArray = await createCorrectArray(products, id);
          console.log(products);
          console.log({ formatedArray });

        await db.salesProducts.bulkCreate(formatedArray);

      return res.status(201).json({ success: {
        message: "Venda realizada com sucesso",
        id: currentIdSale,
      } });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar venda" });
    }
  }
}

module.exports = SalesController;