"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const common_1 = require("./common");
const models_1 = require("./models");
class MainClass {
    static main() {
        const customer = new models_1.Customer(1, "Northwind", "Bangalore", "info@northwind.com", "080-498349834", 12000, "SILVER", true, "Simple Remarks");
        common_1.LogManager.info(customer.toString());
        const settings = config_1.Configuration.getConfiguration();
    }
}
MainClass.main();
//# sourceMappingURL=index.js.map