import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Prisma } from "@prisma/client";
import React from "react";
import TickerStatusBadge from "./TickerStatusBadge";
import Link from "next/link";
import TicketPriority from "./TicketPriority";


type TicketWithUser = Prisma.TicketGetPayload<{
    include: { assignedToUser: true };
}>;

interface Props {
  tickets: TicketWithUser[];
}
const DashRecentTickets = ({ tickets }: Props) => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {tickets
            ? tickets.map(ticket =>
                <div className="flex items-center" key={ticket.id}>
                  <TickerStatusBadge status={ticket.status} />
                  <div className="ml-4 space-y-1">
                    <Link href={`/tickets/${ticket.id}`} />
                    <p>{ticket.title}</p>
                    <p>{ticket.assignedToUser?.name || "Unassigned"}</p>
                  </div>
                  <div className="ml-auto font-medium">
                    <TicketPriority priority={ticket.priority} />
                  </div>
                </div>
              )
            : "No tickets found"}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashRecentTickets;
