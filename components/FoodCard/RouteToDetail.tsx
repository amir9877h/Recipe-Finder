"use client";
import { useRouter } from "next/navigation";
import styles from "./food-card.module.scss";

const RouteToDetail = ({ id, children }) => {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/detail/${id}`)}
    >
      {children}
    </div>
  );
};

export default RouteToDetail;
