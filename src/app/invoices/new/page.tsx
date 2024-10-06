"use client";

import { SyntheticEvent, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { createAction } from "../../../../actions";

export default function CreateInvoice() {
    const [state, setState] = useState("ready");

    async function handleOnSubmit(event: SyntheticEvent) {
        event.preventDefault();

        if (state === "pending") return;

        setState("pending");

        const target = event.target as HTMLFormElement;
        const formData = new FormData(target);

        await createAction(formData);
    }

    return (
        <main className="flex flex-col justify-center h-full gap-6 my-12 max-w-5xl mx-auto">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Create Invoice</h1>
            </div>

            <form
                onSubmit={handleOnSubmit}
                action={createAction}
                className="grid gap-4 max-w-xs"
            >
                <div>
                    <Label
                        htmlFor="namr"
                        className="block font-semibold text-sm mb-2"
                    >
                        Billing Name
                    </Label>
                    <Input name="name" id="name" type="text" />
                </div>
                <div>
                    <Label
                        htmlFor="email"
                        className="block font-semibold text-sm mb-2"
                    >
                        Billing Email
                    </Label>
                    <Input name="email" id="email" type="email" />
                </div>
                <div>
                    <Label
                        htmlFor="value"
                        className="block font-semibold text-sm mb-2"
                    >
                        Value
                    </Label>
                    <Input name="value" id="value" type="text" />
                </div>
                <div>
                    <Label
                        htmlFor="description"
                        className="block font-semibold text-sm mb-2"
                    >
                        Description
                    </Label>
                    <Textarea id="description" name="description"></Textarea>
                </div>
                <div>
                    <Button className="w-full font-semibold">Submit</Button>
                </div>
            </form>
        </main>
    );
}
