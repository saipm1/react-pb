import { CustomerDocument } from "./customer-document";
import { CustomerSchema } from "../db-schemas";
import { Mongoose } from "./connection-manager";

const CustomersContext = Mongoose.model<CustomerDocument>(
  "customers",
  new Mongoose.Schema(CustomerSchema)
);

export { CustomersContext };
