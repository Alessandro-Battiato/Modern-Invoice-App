import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// The dotenv package is needed because when drizzle runs, it will not use the same .env.local as this project's, so in order to use ours with the xata database url, dotenv package helps us and loads our env in whatever file we specify
dotenv.config({
    path: "./.env.local",
});

if (typeof process.env.XATA_DATABASE_URL !== "string") {
    throw new Error("Please set your XATA_DATABASE_URL");
}

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    dbCredentials: {
        url: process.env.XATA_DATABASE_URL,
    },
});
