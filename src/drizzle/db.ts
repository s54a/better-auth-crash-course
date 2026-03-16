import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// async function checkDbConnection() {
//   try {
//     await pool.query("SELECT 1");
//     console.log("✅ Database connected");
//   } catch (err) {
//     console.error("❌ Database connection failed:", err);
//   }
// }

// checkDbConnection();

// export const db = drizzle(pool, { schema });

export const db = drizzle(process.env.DATABASE_URL!, { schema });
