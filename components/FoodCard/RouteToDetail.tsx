"use client";
import { useRouter } from "next/navigation";
import styles from "./food-card.module.scss";
import { ReactNode } from "react";

interface RouteToDetailProps {
  id: string | number;
  children: ReactNode;
}

const RouteToDetail = ({ id, children }: RouteToDetailProps) => {
  const router = useRouter();
  return (
    <div
      className={[styles.container, "cursor-pointer"].join(" ")}
      onClick={() => router.push(`/detail/${id}`)}
    >
      {children}
    </div>
  );
};

export default RouteToDetail;
