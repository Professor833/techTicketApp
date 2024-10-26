"use client";

import React from "react";
import { Ticket, User } from "@prisma/client";
import { useState } from "react";
import axios from "axios";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectValue,
  SelectTrigger
} from "./ui/select";

const AssignTicket = ({ ticket, users }: { ticket: Ticket; users: User[] }) => {
    const [isAssigning, setisAssigning] = useState(false)
    const [error, seterror] = useState("")

    const assignTicket = async (userId: string) => {
        try {
            seterror("")
            setisAssigning(true)
            await axios.patch(`/api/tickets/${ticket.id}`, {
                assignedToUserId: userId === "0" ? null : userId
             })
            setisAssigning(false)
        } catch (error) {
            console.error("Error assigning ticket", error)
            seterror("Error assigning ticket")
            setisAssigning(false)
        }
    }
  return <>
  <Select
    defaultValue={ticket.assignedToUserId?.toString() || "0"}
    onValueChange={(value) => assignTicket(value)}
    disabled={isAssigning}>
    <SelectTrigger>
      <SelectValue
        placeholder="Select User..."
        defaultValue={ticket.assignedToUserId?.toString() || "0"}>
      </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0"> Unassign</SelectItem>
        {users.map((user) => (
            <SelectItem key={user.id} value={user.id.toString()}>
                {user.name}
            </SelectItem>
        ))}
      </SelectContent>
  </Select>
  <p className="text-destructive">{error}</p>
  </>;
};

export default AssignTicket;
