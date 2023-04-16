import ArtworkList from "@/components/Artwork/ArtworkList";
import PrivateRoute from "@/components/PrivateRoute";
import PrincipalLayout from "@/layout/Principal";

const Home = () => {
  return (
    <PrivateRoute>
      <PrincipalLayout>
        <ArtworkList />
      </PrincipalLayout>
    </PrivateRoute>
  );
};

export default Home;
