import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col justify-center h-full text-center gap-6 my-12 max-w-5xl mx-auto">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Invoices</h1>
                <p>
                    <Button
                        className="inline-flex gap-2"
                        variant="ghost"
                        asChild
                    >
                        <Link href="/invoices/new">
                            <CirclePlus className="h-4 w-4" /> Create Invoice
                        </Link>
                    </Button>
                </p>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] p-4">Date</TableHead>
                        <TableHead className="p-4">Customer</TableHead>
                        <TableHead className="p-4">Email</TableHead>
                        <TableHead className="text-center p-4">
                            Status
                        </TableHead>
                        <TableHead className="text-right p-4">Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="p-4 font-medium">
                            <span className="font-semibold">10/31/2024</span>
                        </TableCell>
                        <TableCell className="p-4 text-left">
                            <span className="font-semibold">John Doe</span>
                        </TableCell>
                        <TableCell className="p-4 text-left">
                            <span>johnDoe@planetexpress.com</span>
                        </TableCell>
                        <TableCell className="p-4 text-center">
                            <Badge className="rounded-full">Open</Badge>
                        </TableCell>
                        <TableCell className="p-4 text-right">
                            <span className="font-semibold">$250.00</span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </main>
    );
}
