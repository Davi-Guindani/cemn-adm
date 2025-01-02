import { NextResponse } from "next/server";
import {
  createDelivery,
  getAllDeliveries,
} from "modules/delivery/service/delivery";

export async function GET() {
  try {
    const deliveries = await getAllDeliveries();
    return NextResponse.json(deliveries, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const streetId = searchParams.get("streetId");
    const houseId = searchParams.get("houseId");
    const residentId = searchParams.get("residentId");
    const receivedAt = searchParams.get("receivedAt");
    const companyId = searchParams.get("companyId");
    await createDelivery(
      userId,
      streetId,
      houseId,
      residentId,
      new Date(receivedAt),
      companyId,
    );
    return NextResponse.json({ status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
