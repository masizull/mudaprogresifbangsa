import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "src/data/profile-db.json");

export interface FoundationProfileDB {
  general: {
    heroLine1: string;
    heroLine2: string;
    heroDesc: string;
    aboutHeadline: string;
    aboutDesc: string;
    vision: string;
    address: string;
  };
  governance: {
    pembina: string;
    pengawas: string;
    bph: Array<{ role: string; name: string; desc: string }>;
  };
  legal: {
    deedNumber: string;
    notaryName: string;
    kemenkumhamSk: string;
    npwp: string;
  };
  programs: Array<{
    id: number;
    slug: string;
    title: string;
    category: string;
    shortDesc: string;
    subtitle: string;
    basisLabel: string;
    basisValue: string;
    rhythm: string;
  }>;
}

export async function getProfileDB(): Promise<FoundationProfileDB> {
  const raw = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(raw) as FoundationProfileDB;
}

export async function updateProfileDB(
  partial: Partial<FoundationProfileDB>
): Promise<FoundationProfileDB> {
  const current = await getProfileDB();
  const updated: FoundationProfileDB = {
    ...current,
    ...partial,
    general: { ...current.general, ...(partial.general || {}) },
    governance: { ...current.governance, ...(partial.governance || {}) },
    legal: { ...current.legal, ...(partial.legal || {}) },
    programs: partial.programs ?? current.programs,
  };
  await fs.writeFile(DB_PATH, JSON.stringify(updated, null, 2), "utf-8");
  return updated;
}
