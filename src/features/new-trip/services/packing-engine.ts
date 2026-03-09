import { PackingItem, Trip } from "../models";
import * as PackingRules from "../rules";
import PackingRule from "../rules/packing-rule";

export default class PackingEngine {
  private rules: PackingRule[] = [
    new PackingRules.BasicClothingRule(),
    new PackingRules.HikingRule(),
  ];

  public generatePackingList(trip: Trip): PackingItem[] {
    const packingList: PackingItem[] = [];
    for (const rule of this.rules) {
      if (rule.applies(trip)) {
        packingList.push(...rule.items());
      }
    }
    return packingList;
  }
}
