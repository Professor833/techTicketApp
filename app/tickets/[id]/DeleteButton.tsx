"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DeleteButton = ({ ticketId }: { ticketId: number }) => {
  const router = useRouter();
  const [error, seterror] = useState("");
  const [isDeleting, setisDeleting] = useState(false);

  const deleteTicket = async () => {
    try {
      setisDeleting(true);
      const res = await fetch(`/api/tickets/${ticketId}`, {
        method: "DELETE"
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      router.push("/tickets");
      router.refresh();
    } catch (error) {
      setisDeleting(false);
      seterror("Unable to delete ticket");
      console.log(error);

    }
  };
  return (
    <>
    <AlertDialog>
      <AlertDialogTrigger
        className={buttonVariants({
          variant: "destructive"
        })}
        disabled={isDeleting}
      >
        Delete Ticket
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            ticket.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteTicket}
          className={buttonVariants({
            variant: "destructive"
          })}
          disabled={isDeleting}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <p className="text-destructive">{error}</p>
    </>
  );
};

export default DeleteButton;
