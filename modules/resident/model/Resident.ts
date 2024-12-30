import { Person } from "modules/person/model/Person";

export class Resident extends Person {
  constructor(id: string, firstName: string, lastName: string) {
    super(id, firstName, lastName);
  }
}
