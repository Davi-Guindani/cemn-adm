import { NextApiRequest, NextApiResponse } from "next";
import { handleLogin } from "modules/auth/controllers/authController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const allowedMethods = ["POST"];
  if (allowedMethods.includes(req.method)) {
    return handleLogin(req, res);
  } else {
    return res.status(405).json({
      error: `Method "${req.method}" not allowed`,
    });
  }
}
