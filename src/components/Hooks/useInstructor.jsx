import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useContext(AuthContext);
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructorUser", user?.email],
    enabled: !loading && !!user?.email, 
    queryFn: async () => {
      const response = await fetch(
        `https://online-learning-platform-server-red.vercel.app/users/instructor/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
  });
console.log(isInstructor)
  // const isAdminUser = isAdmin && isAdmin.role === "admin";
  
 

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;