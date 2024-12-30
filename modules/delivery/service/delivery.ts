import { createClient } from "utils/supabase/server";
import { Delivery } from "modules/delivery/model/Delivery";

export async function getAllDeliveries() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("deliveries").select("*");

  if (!error) {
    return data;
  } else {
    throw new Error(error.message);
  }
}
