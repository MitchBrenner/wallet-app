import { neon } from "@neondatabase/serverless";
import "dotenv/config";

// creates a connection to our sql database
export const sql = neon(process.env.DATABASE_URL);
