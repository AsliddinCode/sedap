import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

export function useCurUser() {
  const [curUser, setCurUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const user = await axiosInstance.get("/users");
        setCurUsers(user.data);
      } catch (err) {
        console.error("Error fetching", err);
        setCurUsers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { curUser, loading };
}