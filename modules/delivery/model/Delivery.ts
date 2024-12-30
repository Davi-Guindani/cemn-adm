import { Company } from "modules/company/model/Company";
import { House } from "modules/house/model/House";
import { Record } from "modules/record/model/Record";
import { Resident } from "modules/resident/model/Resident";
import { Street } from "modules/street/model/Street";
import { User } from "modules/user/model/User";

export class Delivery extends Record {
  private readonly _user: User;
  private readonly _street: Street;
  private readonly _house: House;
  private readonly _resident: Resident;
  private readonly _receivedAt: Date;
  private readonly _company: Company;

  constructor(
    id: string,
    user: User,
    street: Street,
    house: House,
    resident: Resident,
    receivedAt: Date,
    company: Company,
  ) {
    super(id);
    this._user = user;
    this._street = street;
    this._house = house;
    this._resident = resident;
    this._receivedAt = receivedAt;
    this._company = company;
  }

  public get user(): User {
    return this._user;
  }

  public get street(): Street {
    return this._street;
  }

  public get house(): House {
    return this._house;
  }

  public get resident(): Resident {
    return this._resident;
  }

  public get receivedAt(): Date {
    return this._receivedAt;
  }

  public get company(): Company {
    return this._company;
  }
}
