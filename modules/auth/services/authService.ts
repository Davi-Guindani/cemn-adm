import { supabaseClient } from "third-party/supabaseClient";

export async function signUp(email: string, password: string) {
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (!error) {
    return { data };
  } else {
    throw new Error(error.message);
  }
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (!error) {
    return { data };
  } else {
    throw new Error(error.message);
  }
}
