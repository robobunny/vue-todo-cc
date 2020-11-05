// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "step 1: open app": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent("#the-header")
      .assert.containsText("h1", "Vue Todo App")
      .assert.elementCount("img", 1)
      .assert.elementPresent("#app-container");
  },

  "example e2e test using a custom command": browser => {
    browser.assert.elementPresent("#app").end();
  }
};
