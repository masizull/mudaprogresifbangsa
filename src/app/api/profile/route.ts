import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getProfileDB, updateProfileDB } from "@/lib/profile-store";

export async function GET() {
  try {
    const data = await getProfileDB();
    return NextResponse.json({ status: "ok", data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: "Gagal memuat profil yayasan" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = await updateProfileDB(body);
    revalidatePath("/");
    revalidatePath("/tentang-kami/profil");
    revalidatePath("/tentang-kami/visi-misi");
    revalidatePath("/tentang-kami/legalitas");
    revalidatePath("/tentang-kami/pengurus");
    return NextResponse.json(
      { status: "updated", message: "Profil berhasil diperbarui", data: updated },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: "Payload tidak valid" },
      { status: 400 }
    );
  }
}
