import { PackingItem, Trip } from "../models";

export default abstract class PackingRule {
  abstract applies(tripRequest: Trip): boolean;
  abstract items(): PackingItem[];
}
