const BasePage = require("./base.page");

class MainPage extends BasePage {
  get loginButton() {
    return $('//*[contains(text(), "Вход")]');
  }

  get userImage() {
    return $('//*[contains (@class,"b-top-profile__image")]');
  }

  get searchField() {
    return $(".fast-search__input");
  }

  async open() {
    await super.open("/");
  }

  async openLoginPage() {
    await this.loginButton.click();
  }

  async findItem(item) {
    await this.searchField.setValue(item);
  }
}

module.exports = new MainPage();
