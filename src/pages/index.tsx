import { useEffect } from "react";
import ArtworkList from "@/components/Artwork/ArtworkList";
import PrivateRoute from "@/components/PrivateRoute";
import PrincipalLayout from "@/layout/Principal";
import { initFlowbite } from "flowbite";

const Home = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <PrivateRoute>
      <PrincipalLayout>
        <div className="mx-auto">
          <ArtworkList />
        </div>
      </PrincipalLayout>
    </PrivateRoute>
  );
};

export default Home;
