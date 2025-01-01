"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.scss";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ children, href }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={[styles.link, path === href ? styles.active : ""].join(" ")}
    >
      {children}
    </Link>
  );
};

export default NavLink;
