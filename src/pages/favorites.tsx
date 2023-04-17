import ArtworkCard from "@/components/Artwork/ArtworkCard";
import PrivateRoute from "@/components/PrivateRoute";
import { useUserContext } from "@/context/User";
import PrincipalLayout from "@/layout/Principal";
import React from "react";

export default function Favorites() {
  const { user } = useUserContext();

  return (
    <PrivateRoute>
      <PrincipalLayout>
        <div className="m-10">
          <h1 className="text-3xl font-bold">Favorites</h1>
          <h2 className="text-xl font-semibold">
            Hi, {user?.name}{" "}
            <span className="text-gray-400">({user?.email})</span>
          </h2>
          <p className="">You have {user?.favorites.length} favorites</p>
        </div>
        <section className="my-10 min-h-[85vh] px-4 container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {user?.favorites.map(({ artwork }) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </section>
      </PrincipalLayout>
    </PrivateRoute>
  );
}
