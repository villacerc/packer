import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class HikingRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
    this.items = [
      new PackingItem("hiking boots"),
      new PackingItem("water bottle"),
      new PackingItem("athletic shirt"),
    ];
  }

  applies() {
    return this.trip.activities.has("hiking");
  }

  getItems() {
    return this.items;
  }
}
