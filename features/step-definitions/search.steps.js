const { Given, When, Then } = require("@wdio/cucumber-framework");
const MainPage = require("../pageobjects/main.page");
const SearchPage = require("../pageobjects/search.page");

Given(/^I Open Onliner Main page$/, async () => {
  await MainPage.open();
});

When(/^I search (.*)$/, async (item) => {
  await MainPage.findItem(item);
});

Then(/^I should see list of (.*)$/, async (item) => {
  await SearchPage.switchFrame();
  const searchResults = SearchPage.items.slice(0, 5);
  const resultArray = Array.from(searchResults);

  resultArray.forEach((result) => {
    const resultText = result.getText();
    assert.ok(resultText.includes(item), `no result found"`);
  });
});
