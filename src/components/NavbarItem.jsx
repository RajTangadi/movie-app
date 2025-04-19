"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const genre = usePathname().split("/")[2];
  console.log(genre);
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/top/${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
