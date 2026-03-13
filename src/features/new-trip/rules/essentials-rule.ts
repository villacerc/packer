import { PackingItem } from "../models";
import PackingRule from "./packing-rule";

export default class EssentialsRule extends PackingRule {
  applies() {
    return true;
  }

  smallLuggageItems() {
    return [
      new PackingItem("toothbrush"),
      new PackingItem("toothpaste"),
      new PackingItem("deodorant"),
      new PackingItem("shampoo"),
      new PackingItem("conditioner"),
      new PackingItem("soap"),
      new PackingItem("medications"),
      new PackingItem("phone charger"),
      new PackingItem("phone"),
      new PackingItem("wallet"),
      new PackingItem("keys"),
      new PackingItem("lib balm"),
    ];
  }

  mediumLuggageItems() {
    return [new PackingItem("wet wipes")];
  }
}
