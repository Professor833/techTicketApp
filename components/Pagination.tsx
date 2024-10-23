"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  intemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ intemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(intemCount / pageSize);
  const router = useRouter();

  if (pageCount === 1) return null;
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <div className="mt-4 mb-4">
      <div className="mb-4">
        <p>
          Page {currentPage} of {pageCount}{" "}
        </p>
      </div>
      <div>
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
        >
          <ChevronFirst />
        </Button>
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <ChevronLeft />
        </Button>

        <Button
          variant="outline"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
        >
          <ChevronRight />
        </Button>
        <Button
          variant="outline"
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
        >
          <ChevronLast />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;