import { Ticket } from "@prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import TickerStatusBadge from "@/components/TickerStatusBadge";
import TicketPriority from "@/components/TicketPriority";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

interface Props {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <Card className="mx-4 mb-4 lg:col-span-3 lg:mr-4">
        <CardHeader>
          <div className="flex justify-between mb-3">
            <TickerStatusBadge status={ticket.status} />
            <TicketPriority priority={ticket.priority} />
          </div>
          <CardTitle>
            {ticket.title}
          </CardTitle>
          <CardDescription>
            Created at :{" "}
            {ticket.createdAt.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric"
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <ReactMarkdown>
            {ticket.description}
          </ReactMarkdown>
        </CardContent>
        <CardFooter>
          <p>
            Updated at :{" "}
            {ticket.updatedAt.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric"
            })}{" "}
          </p>
        </CardFooter>
      </Card>
      <div className="mx-4 flex lg:flex-col lg:mx-0 gap-2">
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={`${buttonVariants({
            variant: "default"
          })}`}
        >
          Edit Ticket
        </Link>
        <Link
          href={`/tickets/edit/${ticket.id}`}
          className={`${buttonVariants({
            variant: "default"
          })}`}
        >
          Delete Ticket
        </Link>
      </div>
    </div>
  );
};

export default TicketDetails;