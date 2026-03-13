import { PackingItem } from "../models";
import PackingRule from "./packing-rule";

export default class WarmTemperatureRule extends PackingRule {
  applies() {
    return this.trip.isWarm();
  }

  smallLuggageItems() {
    return [
      new PackingItem("t-shirt", "daily"),
      new PackingItem("shorts", "daily"),
      new PackingItem("sandals"),
    ];
  }

  mediumLuggageItems(): PackingItem[] {
    return [];
  }
}
