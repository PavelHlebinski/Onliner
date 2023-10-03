class LoginPage {
  get inputEmail() {
    return $('//*[@placeholder="Ник или e-mail"]');
  }

  get inputPassword() {
    return $('//input[@placeholder="Пароль"]');
  }

  get submitButton() {
    return $('//*[contains(@class,"auth-form__control")]//button');
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.submitButton.click();
  }
}

module.exports = new LoginPage();
