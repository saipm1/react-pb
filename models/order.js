"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class Order {
    constructor(orderID, orderDate, customerReference, custOrderExpFb, billingaddress, shippingaddress, units, productID, unitPrice, discountApplied, taxAmount, remarks, custProdFb) {
        this.orderID = orderID;
        this.orderDate = orderDate;
        this.customerReference = customerReference;
        this.custOrderExpFb = custOrderExpFb;
        this.billingaddress = billingaddress;
        this.shippingaddress = shippingaddress;
        this.units = units;
        this.productID = productID;
        this.unitPrice = unitPrice;
        this.discountApplied = discountApplied;
        this.taxAmount = taxAmount;
        this.remarks = remarks;
        this.custProdFb = custProdFb;
    }
    toString() {
        return utilities_1.ObjectFormatter.format(this);
    }
}
//# sourceMappingURL=order.js.map