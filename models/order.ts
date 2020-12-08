import { IOrder } from "../common";
import { ObjectFormatter } from "../utilities";

class Order implements IOrder {
  public constructor(
    public orderID: number,
    public orderDate: string,
    public customerReference: string,
    public custOrderExpFb: string,
    public billingaddress: string,
    public shippingaddress: string,
    public units: string,
    public productID: number,
    public unitPrice: number,
    public discountApplied: number,
    public taxAmount: number,
    public remarks: string,
    public custProdFb: string
  ) {}

  toString() {
    return ObjectFormatter.format(this);
  }
}

export { IOrder };
