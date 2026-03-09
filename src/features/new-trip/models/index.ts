export class PackingItem {
  constructor(
    public name: string,
    public usage: string = "occasional",
    public quantity: number = 1,
  ) {}
}

export class Trip {
  constructor(
    public activities: Set<string>,
    public durationDays: number,
    public temperatureC: number,
  ) {}
  isCold(): boolean {
    return this.temperatureC < 10;
  }
  isWarm(): boolean {
    return this.temperatureC >= 20;
  }
}
