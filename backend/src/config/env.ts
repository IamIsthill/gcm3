import { z } from "zod";

const schema = z.object({
  PORT: z.coerce.number(),
  DB_URL: z.string(),
  ALLOWED_DOMAINS: z.string(),
});

const result = schema.safeParse(process.env);

if (result.error) throw new Error("Misconfigured env");

const ALLOWED_DOMAINS = result.data.ALLOWED_DOMAINS.split(",");

const ENV = { ...result.data, ALLOWED_DOMAINS };

export { ENV };
