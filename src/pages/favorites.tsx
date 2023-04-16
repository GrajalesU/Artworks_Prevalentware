import PrivateRoute from "@/components/PrivateRoute";
import PrincipalLayout from "@/layout/Principal";
import React from "react";

export default function favorites() {
  return (
    <PrivateRoute>
      <PrincipalLayout>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Favorites
        </h1>
      </PrincipalLayout>
    </PrivateRoute>
  );
}
