"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect } from "react";
 
export default function Header() {

    const pathname = usePathname()
    useEffect(() => {
    console.log(pathname);
    }, [pathname]);

  return (
    <h1>{pathname}</h1>
  );
}