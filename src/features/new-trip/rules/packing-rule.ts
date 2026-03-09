import { PackingItem, Trip } from "../models";

export default abstract class PackingRule {
  protected trip: Trip;
  protected items: PackingItem[] = [];
  constructor(trip: Trip) {
    this.trip = trip;
  }
  abstract applies(): boolean;
  abstract getItems(): PackingItem[];
}
