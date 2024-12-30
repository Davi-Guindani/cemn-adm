import { NamedEntity } from "modules/namedEntity/model/NamedEntity";

export class Street extends NamedEntity {
  constructor(id: string, name: string) {
    super(id, name);
  }
}
