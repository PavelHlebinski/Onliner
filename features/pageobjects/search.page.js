const BasePage = require("./base.page");

class SearchPage extends BasePage {
  get frame() {
    return $(".modal-iframe");
  }

  get items() {
    return $$(".product__title-link");
  }

  async switchFrame() {
    await this.frame.waitForExist({ timeout: 3000 });
    await browser.switchToFrame(await this.frame);
  }
}

module.exports = new SearchPage();
