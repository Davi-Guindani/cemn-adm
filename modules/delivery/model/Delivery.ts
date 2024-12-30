import { Record } from "modules/record/model/Record";

export class Delivery extends Record {
  private readonly _userId: string;
  private readonly _houseId: string;
  private readonly _streetId: string;
  private readonly _residentId: string;
  private readonly _receivedAt: Date;
  private readonly _company: string;

  constructor(
    id: string,
    userId: string,
    streetId: string,
    houseId: string,
    residentId: string,
    receivedAt: Date,
    company: string,
  ) {
    super(id);
    this._userId = userId;
    this._streetId = streetId;
    this._houseId = houseId;
    this._residentId = residentId;
    this._receivedAt = receivedAt;
    this._company = company;
  }

  public get userId(): string {
    return this._userId;
  }

  public get streetId(): string {
    return this._streetId;
  }

  public get houseId(): string {
    return this._houseId;
  }

  public get residentId(): string {
    return this._residentId;
  }

  public get receivedAt(): Date {
    return this._receivedAt;
  }

  public get company(): string {
    return this._company;
  }
}
