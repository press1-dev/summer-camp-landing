import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "apps", "web", "data");
const tokensPath = path.join(dataDir, "oauth_tokens.json");

export type ContactPayload = Record<string, string | number | boolean | null | undefined>;

export async function ensureDataDir() {
  await fs.promises.mkdir(dataDir, { recursive: true });
}

export async function readTokens(): Promise<Record<string, unknown>> {
  try {
    await ensureDataDir();
    const txt = await fs.promises.readFile(tokensPath, "utf8");
    return JSON.parse(txt || "{}");
  } catch {
    return {};
  }
}

export async function writeTokens(tokens: Record<string, unknown>) {
  await ensureDataDir();
  await fs.promises.writeFile(
    tokensPath,
    JSON.stringify(tokens, null, 2),
    "utf8",
  );
}

export function messagesPathFor(email: string) {
  const safe = email.replace(/[^a-z0-9@.\-]/gi, "_");
  return path.join(dataDir, `${safe}.json`);
}

export async function readMessages(email: string): Promise<ContactPayload[]> {
  const p = messagesPathFor(email);
  try {
    const txt = await fs.promises.readFile(p, "utf8");
    return JSON.parse(txt || "[]");
  } catch {
    return [];
  }
}

export async function writeMessages(email: string, msgs: ContactPayload[]) {
  const p = messagesPathFor(email);
  await ensureDataDir();
  await fs.promises.writeFile(p, JSON.stringify(msgs, null, 2), "utf8");
}

export async function listStoredAccounts(): Promise<string[]> {
  try {
    await ensureDataDir();
    const files = await fs.promises.readdir(dataDir);
    return files
      .filter((f) => f.endsWith(".json") && f !== "oauth_tokens.json")
      .map((f) => f.replace(/\.json$/, ""));
  } catch {
    return [];
  }
}

export default null as unknown as void;
