import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class HikingRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
  }

  applies() {
    return this.trip.activities.has("hiking");
  }

  items() {
    return [
      new PackingItem("hiking boots", "footwear", 1, 5),
      new PackingItem("backpack", "gear", 1, 4),
      new PackingItem("water bottle", "gear", 1, 3),
      new PackingItem("athletic shirt", "clothing", 1, 2),
    ];
  }
}
