import {
  getDeliveryById,
  updateDelivery,
} from "modules/delivery/service/delivery";
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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const body = await request.json();
    const { userId, streetId, houseId, residentId, receivedAt, companyId } =
      body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Delivery ID is required" },
        { status: 400 },
      );
    }

    const filteredData = Object.fromEntries(
      Object.entries({
        userId,
        streetId,
        houseId,
        residentId,
        receivedAt,
        companyId,
      }).filter(([_, value]) => value),
    );

    await updateDelivery(id, filteredData);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
