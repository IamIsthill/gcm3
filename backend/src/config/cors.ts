import cors from "cors";
import { ENV } from "./env";

export const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    const whitelisted = ENV.ALLOWED_DOMAINS.map((domain) => domain.trim());

    if (whitelisted.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};
