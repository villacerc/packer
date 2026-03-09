import { PackingItem, Trip } from "../models";

export default abstract class PackingRule {
  protected trip: Trip;
  constructor(trip: Trip) {
    this.trip = trip;
  }
  abstract applies(): boolean;
  abstract items(): PackingItem[];
}
