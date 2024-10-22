"use client";

import axios from "axios";
import { ticketSchema } from "@/validationSchemas/ticket";
import React from "react";
import { useState } from "react";
import { z } from "zod";
import { Form, FormControl, FormItem, FormLabel, FormField } from "./ui/form";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent
} from "./ui/select";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Ticket } from "@prisma/client";

type TicketFormData = z.infer<typeof ticketSchema>;

interface TicketFormProps {
  ticket?: Ticket;
}

const TicketForm = ({ ticket }: TicketFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setSetError] = useState("");
  const router = useRouter();

  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema)
  });

  async function onSubmit(values: z.infer<typeof ticketSchema>) {
    console.log("values >> ", values);
    try {
      setIsSubmitting(true);
      setSetError("false");

      if (ticket) {
        await axios.patch(`/api/tickets/${ticket.id}`, values);
      } else {
        await axios.post("/api/tickets", values);
        setIsSubmitting(false);
      }

      router.push("/tickets");
      router.refresh();
    } catch (error) {
      console.error("Error creating ticket", error);
      setSetError("Error creating ticket");
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-md border w-full p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="title"
            defaultValue={ticket?.title}
            render={({ field }) =>
              <FormItem>
                <FormLabel> Ticket Title</FormLabel>
                <FormControl>
                  <Input placeholder="Ticket title ..." {...field} />
                </FormControl>
              </FormItem>}
          />
          <Controller
            name="description"
            defaultValue={ticket?.description}
            control={form.control}
            render={({ field }) =>
              <SimpleMDE placeholder="Ticket description ..." {...field} />}
          />
          <div className="flex w-full space-x-4">
            {/* Status */}
            <FormField
              control={form.control}
              name="status"
              defaultValue={ticket?.status}
              render={({ field }) =>
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Status..." defaultValue={ticket?.status}/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="OPEN">Open</SelectItem>
                      <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                      <SelectItem value="CLOSED">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>}
            />
            {/* Priority */}
            <FormField
              control={form.control}
              name="priority"
              defaultValue={ticket?.priority}
              render={({ field }) =>
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Priority..." defaultValue={ticket?.priority} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="LOW">Low</SelectItem>
                      <SelectItem value="MEDIUM">Medium</SelectItem>
                      <SelectItem value="HIGH">High</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>}
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {ticket ? "Update Ticket" : "Create Ticket"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TicketForm;
