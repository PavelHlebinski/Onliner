const { When, Then } = require("@wdio/cucumber-framework");
const CartModel = require("../models/cart.model");
const assert = require("assert");
const axios = require("axios");

let response;

When(
  /^I send a POST request to (.*) add iPhone 15 to the cart$/,
  async (url) => {
    const cartModel = new CartModel(
      "15493:63282",
      4154995,
      "iphone15",
      15493,
      1
    );
    response = await axios.post(url, cartModel);
  }
);

Then(/^The response status code should be 200$/, () => {
  assert.equal(response.status, 200);
});
