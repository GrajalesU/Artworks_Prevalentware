import PrivateRoute from "@/components/PrivateRoute";
import PrincipalLayout from "@/layout/Principal";

const Home = () => {
  return (
    <PrivateRoute>
      <PrincipalLayout>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Home
        </h1>
      </PrincipalLayout>
    </PrivateRoute>
  );
};

export default Home;
