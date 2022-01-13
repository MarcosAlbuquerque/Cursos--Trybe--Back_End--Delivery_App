const db = require('../../database/models');

class SalesController {
  static async createSale(req, res) {
    // Informacoes que vem do front:
    // .1 userId
    // .2 products
    // .3 deliveryNumber
    // .4 deliveryAddress

    // Informacoes que serao atribuidas automaticamente
    // .5 date
    // .6 Status do pedido = 'pendente'
    
    // Informacoes ainda desconhecidas
    // .7 sellerId
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