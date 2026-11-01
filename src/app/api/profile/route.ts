import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getProfileDB, updateProfileDB } from "@/lib/profile-store";

export async function GET() {
  try {
    const data = await getProfileDB();
    return NextResponse.json({ status: "ok", data });
  } catch (err) {
    return NextResponse.json({ status: "error", message: "Gagal memuat profil" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = await updateProfileDB(body);
    revalidatePath("/");
    revalidatePath("/admin");
    return NextResponse.json({ status: "updated", data: updated });
  } catch (err) {
    return NextResponse.json({ status: "error", message: "Payload tidak valid" }, { status: 400 });
  }
}