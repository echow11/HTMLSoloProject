const {setWorldConstructor} = require("@cucumber/cucumber");
const assert = require('assert');

class CustomWorld {
    constructor() {
        this.driver = null;
        this.headless = null;
    }
}

setWorldConstructor(CustomWorld);