import { PackingItem, Trip } from "../models";
import PackingRule from "./packing-rule";

export default class BasicClothingRule extends PackingRule {
  constructor(trip: Trip) {
    super(trip);
  }

  applies() {
    return true;
  }

  items() {
    const baseCount = Math.ceil(this.trip.durationDays);

    return [
      new PackingItem("shirt", "clothing", baseCount, 3),
      new PackingItem("pants", "clothing", baseCount, 9),
      new PackingItem("underwear", "clothing", baseCount, 9),
      new PackingItem("shoes", "footwear", 1, 5),
    ];
  }
}
