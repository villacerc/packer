import { PackingItem, Trip } from "../models";
import * as PackingRules from "../rules";
import PackingRule from "../rules/packing-rule";

export default class PackingEngine {
  private rules: PackingRule[];

  constructor(trip: Trip) {
    this.rules = [
      new PackingRules.BasicClothingRule(trip),
      new PackingRules.HikingRule(trip),
    ];
  }

  public generatePackingList(): PackingItem[] {
    const packingList: PackingItem[] = [];
    for (const rule of this.rules) {
      if (rule.applies()) {
        packingList.push(...rule.items());
      }
    }
    return packingList;
  }
}
