import { supabase } from "utils/supabase/database";
import { Delivery } from "modules/delivery/model/Delivery";

export async function getDeliveries() {
  const { data, error } = await supabase.from("deliveries").select("*");

  if (error) throw new Error(error.message);
  return data;
}
