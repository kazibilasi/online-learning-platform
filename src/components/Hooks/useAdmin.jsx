import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useContext(AuthContext);
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdminUser", user?.email],
    enabled: !loading && !!user?.email, 
    queryFn: async () => {
      const response = await fetch(
        `https://online-learning-platform-server-red.vercel.app/users/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
  });
console.log(isAdmin)
  // const isAdminUser = isAdmin && isAdmin.role === "admin";
 

  return [isAdmin, isAdminLoading];
};

export default useAdmin;