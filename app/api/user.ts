import { NextApiRequest, NextApiResponse } from "next";
import { getAllDeliveries } from "../../controllers/deliveryController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const allowedMethods = ["GET"];
  if (allowedMethods.includes(req.method)) {
    switch (req.method) {
      case "GET":
        return getProfileData(req, res);
        break;

      default:
        break;
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
