import { PackingItem } from "../models";
import PackingRule from "./packing-rule";

export default class BasicClothingRule extends PackingRule {
  applies() {
    return true;
  }

  getItems() {
    return this.smallLuggageItems();
  }

  smallLuggageItems() {
    return [
      new PackingItem("shirt", "daily"),
      new PackingItem("pants", "daily"),
      new PackingItem("light jacket"),
      new PackingItem("underwear", "daily"),
      new PackingItem("socks", "daily"),
      new PackingItem("shoes"),
      new PackingItem("sleepwear"),
    ];
  }

  mediumLuggageItems() {
    return [];
  }
}
