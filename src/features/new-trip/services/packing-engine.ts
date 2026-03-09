import { PackingItem, Trip } from "../models";
import * as PackingRules from "../rules";
import PackingRule from "../rules/packing-rule";

export default class PackingEngine {
  private rules: PackingRule[];
  private trip: Trip;

  constructor(trip: Trip) {
    this.trip = trip;
    this.rules = [
      new PackingRules.BasicClothingRule(trip),
      new PackingRules.HikingRule(trip),
      new PackingRules.WarmTemperatureRule(trip),
    ];
  }

  public generatePackingList(): PackingItem[] {
    const packingList: Map<string, PackingItem> = this.initializePackingList();
    this.mergeItems(packingList);
    return Array.from(packingList.values());
  }

  private initializePackingList(): Map<string, PackingItem> {
    const packingList: Map<string, PackingItem> = new Map();
    for (const rule of this.rules) {
      if (rule.applies()) {
        rule.items().forEach((item) => packingList.set(item.name, item));
      }
    }
    return packingList;
  }

  private mergeItems(packingList: Map<string, PackingItem>) {
    if (this.trip.isWarm()) {
      if (this.trip.durationDays === 1) {
        packingList.delete("t-shirt");
        packingList.delete("shorts");
        return;
      }
      const newQuantity = Math.floor(this.trip.durationDays / 2);
      const remainder = this.trip.durationDays % 2 === 0 ? 0 : 1;
      const shirt = packingList.get("shirt");
      const tshirt = packingList.get("t-shirt");
      const pants = packingList.get("pants");
      const shorts = packingList.get("shorts");
      if (shirt && tshirt) {
        shirt.quantity = newQuantity;
        tshirt.quantity = newQuantity + remainder;
      }
      if (pants && shorts) {
        pants.quantity = newQuantity;
        shorts.quantity = newQuantity + remainder;
      }
    }
  }
}
