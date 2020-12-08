import { Configuration } from "./config";
import { LogManager } from "./common";
import { Customer } from "./models";

class MainClass {
  static main(): void {
    const customer = new Customer(
      1,
      "Northwind",
      "Bangalore",
      "info@northwind.com",
      "080-498349834",
      12000,
      "SILVER",
      true,
      "Simple Remarks"
    );
    LogManager.info(customer.toString());

    const settings = Configuration.getConfiguration();
  }
}

MainClass.main();
