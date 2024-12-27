import { Record } from "modules/record/model/Record";

export class Resident extends Record {
  private _firstName: string;
  private _lastName: string;
  private _street: string;
  private _houseNumber: number;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    street: string,
    houseNumber: number,
  ) {
    super(id);
    this._firstName = firstName;
    this._lastName = lastName;
    this._street = street;
    this._houseNumber = houseNumber;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get street(): string {
    return this._street;
  }

  public get houseNumber(): number {
    return this._houseNumber;
  }
}
