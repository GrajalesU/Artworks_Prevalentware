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
