import Header from "@/components/Header";
import Search from "@/components/Search";
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
      <div className=" bg-white border-t border-gray-300 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto">
          <Search />
        </div>
      </div>
      {children}
    </>
  );
}
