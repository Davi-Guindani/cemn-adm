import { NextResponse } from "next/server";
import { getDeliveries } from "modules/delivery/service/delivery";

export async function GET() {
  try {
    const deliveries = await getDeliveries();
    return NextResponse.json(deliveries, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
