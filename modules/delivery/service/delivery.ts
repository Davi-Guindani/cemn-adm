import { createClient } from "utils/supabase/server";
import { Delivery } from "../model/Delivery";
import { User } from "modules/user/model/User";
import { Street } from "modules/street/model/Street";
import { Resident } from "modules/resident/model/Resident";
import { Company } from "modules/company/model/Company";
import { House } from "modules/house/model/House";
import { selectDeliveriesQueryType } from "../queryTypes/types";

export async function getAllDeliveries(): Promise<Delivery[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("deliveries")
    .select(
      `id, 
    users(id, first_name, last_name, email), 
    streets(id, name), 
    houses(id, number), 
    residents(id, first_name, last_name), 
    received_at, 
    companies(id, name)`,
    )
    .returns<selectDeliveriesQueryType[]>();

  if (!error) {
    let deliveries: Delivery[] = [];
    deliveries = data.map((delivery) => {
      const user = new User(
        delivery.users.id,
        delivery.users.first_name,
        delivery.users.last_name,
        delivery.users.email,
      );
      const street = new Street(delivery.streets.id, delivery.streets.name);
      const house = new House(
        delivery.houses.id,
        delivery.houses.number,
        street,
      );
      const resident = new Resident(
        delivery.residents.id,
        delivery.residents.first_name,
        delivery.residents.last_name,
      );
      const receivedAt = delivery.received_at;
      const company = new Company(
        delivery.companies.id,
        delivery.companies.name,
      );

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
  } else {
    throw error;
  }
}

export async function getDeliveryById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("deliveries")
    .select(
      `id, 
    users(id, first_name, last_name, email), 
    streets(id, name), 
    houses(id, number), 
    residents(id, first_name, last_name), 
    received_at, 
    companies(id, name)`,
    )
    .eq("id", id)
    .returns<selectDeliveriesQueryType>();

  if (!error) {
    const user = new User(
      data[0].users.id,
      data[0].users.first_name,
      data[0].users.last_name,
      data[0].users.email,
    );
    console.log("2");
    const street = new Street(data[0].streets.id, data[0].streets.name);
    const house = new House(data[0].houses.id, data[0].houses.number, street);
    const resident = new Resident(
      data[0].residents.id,
      data[0].residents.first_name,
      data[0].residents.last_name,
    );
    const receivedAt = data[0].received_at;
    const company = new Company(data[0].companies.id, data[0].companies.name);

    return new Delivery(
      data[0].id,
      user,
      street,
      house,
      resident,
      receivedAt,
      company,
    );
  } else {
    throw error;
  }
}
