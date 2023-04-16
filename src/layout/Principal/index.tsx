import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";

export interface PrincipalLayoutProps {
  children?: React.ReactNode;
}

export default function PrincipalLayout({ children }: PrincipalLayoutProps) {
  const { pathname } = useRouter();
  return (
    <>
      <Header currentPage={pathname} />
      {children}
    </>
  );
}
