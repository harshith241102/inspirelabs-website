/* In-memory rate limiter: 5 requests per IP per route per 15-minute window */

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

const store = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string, route: string): { ok: boolean } {
  const key = `${ip}:${route}`;
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { ok: false };
  }

  entry.count += 1;
  return { ok: true };
}
