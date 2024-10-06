import {
    pgTable,
    pgEnum,
    text,
    serial,
    integer,
    timestamp,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
    "open",
    "paid",
    "void",
    "uncollectible",
]); // the array contains all of the valid values

export const Invoices = pgTable("invoices", {
    id: serial("id").primaryKey().notNull(), // primaryKey = unique value for each row of the table
    createTs: timestamp("createTs").notNull().defaultNow(), // not null = can't be null
    status: statusEnum("status").notNull(),
    value: integer("value").notNull(),
    description: text("description").notNull(),
});
