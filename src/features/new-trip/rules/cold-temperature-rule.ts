import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class ColdTemperatureRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
  }

  applies() {
    return this.trip.isCold();
  }

  items() {
    return [
      new PackingItem("jacket", "clothing", 1, 9),
      new PackingItem("gloves", "clothing", 1, 9),
      new PackingItem("beanie", "clothing", 1, 5),
    ];
  }
}
