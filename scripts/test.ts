import { Trip } from "../src/features/new-trip/models";
import PackingEngine from "../src/features/new-trip/services/packing-engine";

const newTrip = new Trip(new Set<string>(["hiking"]), 5, 20, "medium");
const packingEngine = new PackingEngine(newTrip);
const packingList = packingEngine.generatePackingList();
console.log("Generated Packing List:", packingList);
