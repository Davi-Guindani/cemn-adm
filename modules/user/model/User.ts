export class User {
  private _id: string;
  private _firstName: string;
  private _lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public get id(): string {
    return this._id;
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
