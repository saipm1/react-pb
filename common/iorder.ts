import { NumberLiteralType } from "typescript";

interface IOrder {
  orderID: number;
  orderDate: string;
  customerReference: string;
  custOrderExpFb: string;
  billingaddress: string;
  shippingaddress: string;
  units: string;
  productID: number;
  unitPrice: number;
  discountApplied: number;
  taxAmount: number;
  remarks: string;
  custProdFb: string;
}

export { IOrder };
