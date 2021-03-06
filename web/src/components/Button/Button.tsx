import styles from "./Button.module.css";
import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({ children, onClick, variant = "primary" }: Props) => {
  const className = styles[variant];
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
