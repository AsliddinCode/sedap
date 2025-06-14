import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

export function useUsersWithRestaurants() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axiosInstance.get("/users", {
          params: {
            populate: "restaurant",
          },
        });

        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching", err);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { users, loading };
}
