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
    const packingList: PackingItem[] = this.initializePackingList();
    return packingList;
  }

  private initializePackingList(): PackingItem[] {
    const packingList: PackingItem[] = [];
    for (const rule of this.rules) {
      if (rule.applies()) {
        packingList.push(...rule.getItems());
      }
    }
    return packingList;
  }
}
