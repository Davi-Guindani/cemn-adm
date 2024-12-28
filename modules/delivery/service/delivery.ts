import { createClient } from "utils/supabase/server";
import { Delivery } from "modules/delivery/model/Delivery";

export async function getDeliveries() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("deliveries").select("*");

  if (error) throw new Error(error.message);
  return data;
}
