export type ItemRequest = {
  name: string;
  category: string;
  base_quantity: number;
  importance: number;
};

export type TripRequest = {
  activities: Set<string>;
  durationDays: number;
  temperatureC: number;
};
