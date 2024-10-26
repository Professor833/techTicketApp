import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";
import StatusFilter from "@/components/StatusFilter";
import { Status, Ticket } from "@prisma/client";

export interface SearchParams {
  page: string;
  status: string;
  orderBy: keyof Ticket;
}
// Type guard to check if a string is a valid Status
function isValidStatus(status: string): status is Status {
  return Object.values(Status).includes(status as Status);
}

const Tickets = async ({ searchParams }: { searchParams: SearchParams }) => {
  const pageSize = 10;
  const page = parseInt(searchParams.page) || 1;
  const orderBy = searchParams.orderBy ? searchParams.orderBy : "createdAt";

  // const statuses = Object.values(Status);

  // Use the type guard to safely check the status
  const status = isValidStatus(searchParams.status)
    ? searchParams.status
    : undefined;

  let where = {};
  if (status) {
    where = {
      status
    };
  } else {
    where = {
      // if not status is received, return all tickets except closed
      NOT: [{ status: "CLOSED" as Status }]
    };
  }
  const ticketCount = await prisma.ticket.count({ where });

  const tickets = await prisma.ticket.findMany({
    where,
    orderBy: {
      [orderBy]: "desc"
    },
    take: pageSize,
    skip: (page - 1) * pageSize
  });

  return (
    <div>
      <div className="flex gap-2">
        <Link
          href={"/tickets/new"}
          className={buttonVariants({ variant: "default" })}
        >
          New Ticket
        </Link>
        <StatusFilter />
      </div>
      <DataTable tickets={tickets} searchParams={searchParams} />
      <Pagination
        itemCount={ticketCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
};

export default Tickets;
