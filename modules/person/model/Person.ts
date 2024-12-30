import { Record } from "modules/record/model/Record";

export abstract class Person extends Record {
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _fullName: string;

  constructor(id: string, firstName: string, lastName: string) {
    super(id);
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullName = this._firstName + " " + this._lastName;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get fullName(): string {
    return this._fullName;
  }
}
