import { Record } from "modules/record/model/Record";

export class Delivery extends Record {
  private _residentId: string;
  private _company: string;
  private _userId: string;
  private _receivedAt: string;

  constructor(
    id: string,
    residentId: string,
    company: string,
    userId: string,
    receivedAt: string,
  ) {
    super(id);
    this._residentId = residentId;
    this._company = company;
    this._userId = userId;
    this._receivedAt = receivedAt;
  }

  public get residentId(): string {
    return this._residentId;
  }

  public get company(): string {
    return this._company;
  }

  public get userId(): string {
    return this._userId;
  }

  public get receivedAt(): string {
    return this._receivedAt;
  }
}
