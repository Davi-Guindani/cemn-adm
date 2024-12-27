import { Record } from "modules/record/model/Record";

export class User extends Record {
  private _firstName: string;
  private _lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    super(id);
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }
}
