import { useEffect, useState } from "react";
import ArtworkList from "@/components/Artwork/ArtworkList";
import PrivateRoute from "@/components/PrivateRoute";
import PrincipalLayout from "@/layout/Principal";
import { initFlowbite } from "flowbite";
import Search from "@/components/Search";

const Home = () => {
  const [artist, setArtist] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <PrivateRoute>
      <PrincipalLayout>
        <div className=" bg-white border-t border-gray-300 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="max-w-screen-xl mx-auto">
            <Search setArtist={setArtist} setQuery={setQuery} />
          </div>
        </div>
        <div className="mx-auto">
          <ArtworkList artist={artist} q={query} />
        </div>
      </PrincipalLayout>
    </PrivateRoute>
  );
};

export default Home;
