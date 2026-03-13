import { PackingItem, Trip } from "../models";

export default abstract class PackingRule {
  protected trip: Trip;
  constructor(trip: Trip) {
    this.trip = trip;
  }
  abstract applies(): boolean;
  getItems() {
    const items = this.smallLuggageItems();
    if (this.trip.luggageSize === "medium") {
      items.push(...this.mediumLuggageItems());
    }
    return items;
  }
  abstract mediumLuggageItems(): PackingItem[];
  abstract smallLuggageItems(): PackingItem[];
}
