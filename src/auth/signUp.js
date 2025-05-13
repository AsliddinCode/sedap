import { axiosInstance } from "@/utils/axiosInstance";

export default async function signUp(data) {
  const { email, password, username } = data;
  try {
    // Request API.
    // fetch
    const data = await axiosInstance
      .post("/auth/local/register", {
        email: email,
        password: password,
        username: username,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        return { user: response.data.user, jwt: response.data.jwt };
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
    return data;
  } catch (err) {
    console.error("res err: ", err);
  }
}