import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class BasicClothingRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
    this.items = [
      new PackingItem("light jacket"),
      new PackingItem("underwear", "daily"),
      new PackingItem("socks", "daily"),
      new PackingItem("shoes"),
    ];
  }

  applies() {
    return true;
  }

  getItems() {
    if (!this.trip.isWarm()) {
      this.items.push(
        new PackingItem("shirt", "daily"),
        new PackingItem("pants", "daily"),
      );
    }
    return this.items;
  }
}
