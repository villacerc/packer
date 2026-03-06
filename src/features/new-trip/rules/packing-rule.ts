import { TripRequest } from "../types";

export default abstract class PackingRule {
  abstract applies(tripRequest: TripRequest): boolean;
}
