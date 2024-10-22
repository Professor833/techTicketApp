import TickerStatusBadge from "@/components/TickerStatusBadge";
import TicketPriority from "@/components/TicketPriority";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Ticket } from "@prisma/client";
import React from "react";

interface Props {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: Props) => {
  // console.log("tickets", tickets);

  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>
                <div className="flex justify-center">Status</div>
              </TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map(ticket =>
                  <TableRow key={ticket.id} data-href="/">
                    <TableCell>
                      {ticket.id}
                    </TableCell>
                    <TableCell>
                      {ticket.title}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TickerStatusBadge status={ticket.status} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketPriority priority={ticket.priority} />
                      </div>
                    </TableCell>
                    <TableCell>
                      {ticket.createdAt.toLocaleDateString("en-US", {
                        year: "2-digit",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                      })}
                    </TableCell>
                  </TableRow>
                )
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
