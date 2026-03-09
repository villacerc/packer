import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class BasicClothingRule extends PackingRule {
  applies(trip: Trip) {
    return true;
  }

  items() {
    return [
      new PackingItem("t-shirt", "clothing", 2, 3),
      new PackingItem("pants", "clothing", 2, 9),
      new PackingItem("underwear", "clothing", 3, 9),
    ];
  }
}
