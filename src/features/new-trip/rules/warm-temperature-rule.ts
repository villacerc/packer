import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class WarmTemperatureRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
  }

  applies() {
    return this.trip.isWarm();
  }

  items() {
    return [
      new PackingItem("t-shirt", "clothing", 1, 9),
      new PackingItem("shorts", "clothing", 1, 9),
      new PackingItem("sandals", "footwear", 1, 4),
    ];
  }
}
