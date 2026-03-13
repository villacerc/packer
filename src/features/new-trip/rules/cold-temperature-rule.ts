import { PackingItem } from "../models";
import PackingRule from "./packing-rule";

export default class ColdTemperatureRule extends PackingRule {
  applies() {
    return this.trip.isCold();
  }

  smallLuggageItems() {
    return [
      new PackingItem("jacket"),
      new PackingItem("gloves"),
      new PackingItem("beanie"),
      new PackingItem("scarf"),
    ];
  }

  mediumLuggageItems(): PackingItem[] {
    return [];
  }
}
