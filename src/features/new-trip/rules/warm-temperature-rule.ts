import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class WarmTemperatureRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
    this.items = [
      new PackingItem("t-shirt", "daily"),
      new PackingItem("shorts", "daily"),
      new PackingItem("sandals"),
    ];
  }

  applies() {
    return this.trip.isWarm();
  }

  getItems() {
    return this.items;
  }
}
