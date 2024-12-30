import { Record } from "modules/record/model/Record";
import { Street } from "modules/street/model/Street";

export class House extends Record {
  private readonly _number: number;
  private readonly _street: Street;

  constructor(id: string, number: number, street: Street) {
    super(id);
    this._number = number;
    this._street = street;
  }

  public get number(): number {
    return this._number;
  }

  public get street(): Street {
    return this._street;
  }
}
