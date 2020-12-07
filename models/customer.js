"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const utilities_1 = require("../utilities");
class Customer {
    constructor(customerId, customerName, address, email, phoneNumber, creditLimit, customerType, activeStatus, remarks) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.creditLimit = creditLimit;
        this.customerType = customerType;
        this.activeStatus = activeStatus;
        this.remarks = remarks;
    }
    toString() {
        return utilities_1.ObjectFormatter.format(this);
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map