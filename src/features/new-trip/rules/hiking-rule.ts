import { PackingItem } from "../models";
import PackingRule from "./packing-rule";

export default class HikingRule extends PackingRule {
  applies() {
    return this.trip.activities.has("hiking");
  }

  smallLuggageItems() {
    return [
      new PackingItem("hiking boots"),
      new PackingItem("water bottle"),
      new PackingItem("athletic shirt"),
    ];
  }

  mediumLuggageItems() {
    return [
      new PackingItem("athletic pants"),
      new PackingItem("hiking backpack"),
      new PackingItem("hiking poles"),
      new PackingItem("bug repellant"),
      new PackingItem("emergency whistle"),
      new PackingItem("energy bars"),
    ];
  }
}
