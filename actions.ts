"use server";

import { redirect } from "next/navigation";

import { Invoices } from "@/db/schema";
import { db } from "@/db";

export async function createAction(formData: FormData) {
    // The following value will only contain the first 4 digits entered by the user, for example, 12344444, we'll only get 1234
    const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
    const description = formData.get("description") as string;

    const results = await db
        .insert(Invoices)
        .values({ value, description, status: "open" })
        .returning({ id: Invoices.id });

    redirect(`/invoices/${results[0].id}`);
}
