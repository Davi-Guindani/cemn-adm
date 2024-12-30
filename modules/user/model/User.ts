import { Person } from "modules/person/model/Person";

export class User extends Person {
  private readonly _email: string;

  constructor(id: string, firstName: string, lastName: string, email: string) {
    super(id, firstName, lastName);
    this._email = email;
  }

  public get email(): string {
    return this._email;
  }
}
