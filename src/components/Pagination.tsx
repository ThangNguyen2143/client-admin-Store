"use client";
import clsx from "clsx";
import Link from "next/link";
// import { generatePagination } from "@/app/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

function GeneratePagination({
  url,
  name,
  active,
}: {
  url: string;
  name: string;
  active: boolean;
}) {
  return (
    <Link
      className={
        `btn btn-outline btn-accent join-item outline-1 ` +
        (active ? "btn-active" : "")
      }
      aria-label={"page " + name}
      href={url}
    >
      {name}
    </Link>
  );
}
export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex w-full justify-center">
      <div className="join">
        {pages.map((page) => {
          return (
            <GeneratePagination
              url={createPageURL(page)}
              name={page.toString()}
              active={currentPage === page}
              key={page}
            />
          );
        })}
      </div>
    </div>
  );
}
