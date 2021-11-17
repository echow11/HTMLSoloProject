const assert = require('assert');
const driver = require('./../../driver');
const uri = 'file:///C:/Users/james.walsh/Documents/HTML Solo Project/index.html';
const webDriver = require("selenium-webdriver");

const {
    After,
    Before,
    Given,
    Then,
    When
} = require('@cucumber/cucumber');
const { getSystemErrorMap } = require('util');
const { headless } = require('./../../driver');

Before({timeout: 8000}, async function() {
    this.driver = driver;
    this.headless = await driver.headless(uri);
});

After({timeout: 8000}, async function() {
    await this.headless.quit();
});

Given('the loaded web-site', async function() {
    // Nothing to do, as set-up loads the site
});

When('toggled using the button', async function() {
    await this.driver.submitFormButton(this.headless);
});

When('changePage on hyperlink clicked', async function() {
    await this.driver.changePage(this.headless);
});

Then('the browser title should be {string}', async function(title) {
    assert(title == await this.headless.getTitle());
});

Then('the return should be {string}', async function(stringSubmit) {
    const expectedString = webDriver.By.css("#submissionHell");
    assert(expectedString != null);
});

Then('the heading should be {word}', async function(color) {
    const colours = {
        'blue': 'rgba(0, 0, 255, 1)'
    };

    const actual = await this.driver.header(this.headless);
    const expected = colours[color];

    assert(expected != null);
    assert(actual == expected);
});