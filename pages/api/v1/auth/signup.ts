import { NextApiRequest, NextApiResponse } from "next";
import { handleSingUp } from "modules/auth/controllers/authController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const allowedMethods = ["POST"];
  if (allowedMethods.includes(req.method)) {
    return handleSingUp(req, res);
  } else {
    return res.status(405).json({
      error: `Method "${req.method}" not allowed`,
    });
  }
}
