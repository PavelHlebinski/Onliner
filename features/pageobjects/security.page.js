class SecurityPage {
  get frame() {
    return $('//iframe[@title="reCAPTCHA"]');
  }

  get checkBox() {
    return $('//*[@class="recaptcha-checkbox-border"]');
  }

  async passSecurity() {
    await this.frame.waitForExist({ timeout: 3000 });
    await browser.switchToFrame(await this.frame);
    await this.checkBox.click();
    browser.switchToParentFrame();
  }
}

module.exports = new SecurityPage();
