import { NextApiRequest, NextApiResponse } from "next";
import { signUp, signIn } from "../services/authService";

export async function handleSingUp(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body;
    await signUp(email, password);
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(405).json({ error: "Failed to create user" });
  }
}

export async function handleLogin(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body;
    await signIn(email, password);
    res.status(200).json({ message: "Signed in" });
  } catch (error) {
    res.status(405).json({ error: "Failed to create user" });
  }
}
