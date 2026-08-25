import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { randomUUID } from "node:crypto";
import { parse } from "cookie";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
  guestKey?: string | null;
};

export const GUEST_WORKSPACE_COOKIE = "bonds_guest_workspace";

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    user = await sdk.authenticateRequest(opts.req);
  } catch (error) {
    // Authentication is optional for public procedures.
    user = null;
  }

  const cookies = parse(opts.req.headers.cookie ?? "");
  const guestKey = cookies[GUEST_WORKSPACE_COOKIE] ?? randomUUID();
  if (!cookies[GUEST_WORKSPACE_COOKIE]) {
    opts.res.cookie(GUEST_WORKSPACE_COOKIE, guestKey, { ...getSessionCookieOptions(opts.req), maxAge: 1000 * 60 * 60 * 24 * 365 });
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
    guestKey,
  };
}
