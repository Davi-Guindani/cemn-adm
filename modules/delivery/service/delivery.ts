import { createClient } from "utils/supabase/server";
import { Delivery } from "../model/Delivery";
import { User } from "modules/user/model/User";
import { Street } from "modules/street/model/Street";
import { Resident } from "modules/resident/model/Resident";
import { Company } from "modules/company/model/Company";
import { House } from "modules/house/model/House";
import {
  selectDeliveriesQueryType,
  deliveriesQuery,
} from "../helpers/delivery";

function parseDelivery(data: selectDeliveriesQueryType[]) {
  let deliveries: Delivery[] = [];
  deliveries = data.map((delivery) => {
    const user = new User(
      delivery.users.id,
      delivery.users.first_name,
      delivery.users.last_name,
      delivery.users.email,
    );
    const street = new Street(delivery.streets.id, delivery.streets.name);
    const house = new House(delivery.houses.id, delivery.houses.number, street);
    const resident = new Resident(
      delivery.residents.id,
      delivery.residents.first_name,
      delivery.residents.last_name,
    );
    const receivedAt = delivery.received_at;
    const company = new Company(delivery.companies.id, delivery.companies.name);

    return new Delivery(
      delivery.id,
      user,
      street,
      house,
      resident,
      receivedAt,
      company,
    );
  });
  return deliveries;
}

export async function getAllDeliveries(): Promise<Delivery[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("deliveries")
    .select(deliveriesQuery)
    .returns<selectDeliveriesQueryType[]>();

  if (!error) {
    return parseDelivery(data);
  } else {
    throw error;
  }
}

export async function getDeliveryById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("deliveries")
    .select(deliveriesQuery)
    .eq("id", id)
    .returns<selectDeliveriesQueryType[]>();

  if (!error) {
    return parseDelivery(data);
  } else {
    throw error;
  }
}
