import signUp from "@/auth/signUp";

export default async function registerHandler(req, res) {
  try {
    const { email, password, username } = req.body;
    const userData = await signUp({ email, password, username });

    res.status(200).json({ success: true, body: userData });
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      res.status(401).json({ error: "Invalid credentials." });
    } else {
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}