import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class ColdTemperatureRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
    this.items = [
      new PackingItem("jacket"),
      new PackingItem("gloves"),
      new PackingItem("beanie"),
    ];
  }

  applies() {
    return this.trip.isCold();
  }

  getItems() {
    return this.items;
  }
}
