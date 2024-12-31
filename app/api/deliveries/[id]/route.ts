import { getDeliveryById } from "modules/delivery/service/delivery";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const delivery = await getDeliveryById(id);
    return NextResponse.json(delivery, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
