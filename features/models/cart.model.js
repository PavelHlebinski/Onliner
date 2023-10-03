class CartModel {
  constructor(position_id, product_id, product_key, shop_id, quantity) {
    this.position_id = position_id;
    this.product_id = product_id;
    this.product_key = product_key;
    this.shop_id = shop_id;
    this.quantity = quantity;
  }
}

module.exports = CartModel;
