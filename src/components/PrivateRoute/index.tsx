import { useUserContext } from "@/context/User";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const router = useRouter();
  const { user, userLogin } = useUserContext();
  let token: string | null = null;
  if (typeof window !== "undefined") {
    token = localStorage?.getItem("token");
  }

  useEffect(() => {
    const getUser = async () => {
      const userResponse = await fetch("/api/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await userResponse.json();
      userLogin(user);
    };

    if (!user && !token) {
      router.push("/login");
    }
    if (!user && token) {
      getUser();
    }
  }, [user, token, router, userLogin]);

  return <>{children}</>;
};

export default PrivateRoute;
