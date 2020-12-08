import { ICustomer } from "../common";
import { Mongoose } from "./connection-manager";

interface CustomerDocument extends ICustomer, Mongoose.Document {}

export { CustomerDocument };
