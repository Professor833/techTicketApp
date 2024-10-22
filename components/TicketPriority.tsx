import { Priority } from "@prisma/client";
import { Flame } from "lucide-react";
import React from "react";

interface Props {
  priority: Priority;
}

const priorityMap: Record<
  Priority,
  {
    label: string;
    lelvel: 1 | 2 | 3;
  }
> = {
  LOW: {
    label: "Low",
    lelvel: 1
  },
  MEDIUM: {
    label: "Medium",
    lelvel: 2
  },
  HIGH: {
    label: "High",
    lelvel: 3
  }
};

const TicketPriority = ({ priority }: Props) => {
  return <>
    <Flame className={`${priorityMap[priority].lelvel >= 1 ? "text-red-500" : "text-muted" }`} />
    <Flame className={`${priorityMap[priority].lelvel >= 2 ? "text-red-500" : "text-muted" }`} />
    <Flame className={`${priorityMap[priority].lelvel >= 3 ? "text-red-500" : "text-muted" }`} />
  </>;
};

export default TicketPriority;
