import { useEffect, useState } from "react";

export default function useCurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let user1 = localStorage.getItem("user");
      user1 = user1 ? JSON.parse(user1) : null;
      setUser(user1);
    }
  }, []);

  return user;
}
