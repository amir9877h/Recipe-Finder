"use client";

import { ReactNode } from "react";

interface CustomIconProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomIcon: React.FC<CustomIconProps> = ({ children }) => {
  return <>{children}</>;
};
export default CustomIcon;
