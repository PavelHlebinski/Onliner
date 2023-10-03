const { Given, When, Then } = require("@wdio/cucumber-framework");
const MainPage = require("../pageobjects/main.page");
const LoginPage = require("../pageobjects/login.page");
const SecurityPage = require("../pageobjects/security.page");

Given(/^I open Onliner Login page$/, async () => {
  await MainPage.open();
  await MainPage.openLoginPage();
});

When(/^I Login with (.*) and (.*)$/, async (email, password) => {
  await LoginPage.login(email, password);
  await SecurityPage.passSecurity();
});

Then(/^I should see user image$/, async () => {
  const userImage = await MainPage.userImage;
  await expect(userImage).toExist();
});
