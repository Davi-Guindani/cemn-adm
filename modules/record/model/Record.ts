export abstract class Record {
  private readonly _id: string;

  constructor(id: string) {
    this._id = id;
  }

  public get id() {
    return this._id;
  }
}
