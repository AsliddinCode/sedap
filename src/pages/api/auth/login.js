import signIn from "@/auth/signIn";

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    const userData = await signIn("credentials", { email, password });

    res.status(200).json({ success: true, body: userData });
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      res.status(401).json({ error: "Invalid credentials." });
    } else {
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}