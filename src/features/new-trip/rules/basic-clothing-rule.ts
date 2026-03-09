import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class BasicClothingRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
    this.items = [
      new PackingItem("light jacket"),
      new PackingItem("underwear"),
      new PackingItem("socks"),
      new PackingItem("shoes"),
    ];
  }

  applies() {
    return true;
  }

  getItems() {
    if (!this.trip.isWarm()) {
      this.items.push(new PackingItem("shirt"), new PackingItem("pants"));
    }
    return this.items;
  }
}
