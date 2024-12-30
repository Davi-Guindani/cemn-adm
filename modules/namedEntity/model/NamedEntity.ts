import { Record } from "modules/record/model/Record";

export abstract class NamedEntity extends Record {
  private readonly _name: string;

  constructor(id: string, name: string) {
    super(id);
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}
