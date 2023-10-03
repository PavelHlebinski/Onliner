module.exports = class BasePage {
  async open(path) {
    await browser.url(path);
  }
};
