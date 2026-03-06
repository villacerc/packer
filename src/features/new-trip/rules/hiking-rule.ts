import { TripRequest } from "../types";
import PackingRule from "./packing-rule";

class HikingRule extends PackingRule {
  applies(tripRequest: TripRequest) {
    return tripRequest.activities.has("hiking");
  }
}
