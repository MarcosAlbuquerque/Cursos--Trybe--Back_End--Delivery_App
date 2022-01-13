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
    const newSale = { ...req.body }
    try {
      const createSale = await db.sales.create(newSale)
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