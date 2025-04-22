"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const pathname = usePathname();
  const isActive = pathname?.split("/")[2] === param;

  return (
    <Link
      href={`/top/${param}`}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        isActive
          ? "text-primary border-b-2 border-primary"
          : "text-muted-foreground hover:text-primary"
      }`}
    >
      {title}
    </Link>
  );
}
