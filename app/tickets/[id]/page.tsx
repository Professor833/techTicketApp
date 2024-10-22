import prisma from "@/prisma/db";
import React from "react";
import TicketDetails from "./TicketDetails";

interface Props {
  params: { id: string };
}

const ViewTicket = async ({ params }: Props) => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(params.id)
    }
  });
  if (!ticket) {
    return <p className="text-destructive">Ticket Not Found</p>;
  }

  return (
    <div>
      <TicketDetails ticket={ticket} />
    </div>
  );
};

export default ViewTicket;
