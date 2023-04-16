import Header from "@/components/Header";
import React from "react";

export interface PrincipalLayoutProps {
  children?: React.ReactNode;
}

export default function PrincipalLayout({ children }: PrincipalLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
