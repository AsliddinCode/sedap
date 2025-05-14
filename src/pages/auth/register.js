import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Alert,
  IconButton,
  Stack,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthLayout from "../../components/AuthLayout";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [avatar, setAvatar] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAvatarFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setAvatarUrl(""); // URL tozalanadi
    }
  };

  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
    setAvatar(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (form.password !== form.confirmPassword) {
    //   setError("Parollar mos emas");
    //   return;
    // }
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username"); // 'username'
    const email = formData.get("email"); // 'test@mail.com'
    const password = formData.get("password"); // 'errer3r3r3'

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });

    // const user = {
    //   id: Date.now().toString(),
    //   name: form.name,
    //   lastName: form.lastName,
    //   email: form.email,
    //   avatar:
    //     avatar ||
    //     "https://avatars.mds.yandex.net/i?id=d2161fd91a435a4528b4bdca7ab9a1149873d046-5847755-images-thumbs&n=13",
    //   createdAt: new Date().toISOString().split("T")[0],
    // };
    if (response.ok) {
      const res = await response.json();
      console.log("res", res);
      const { user, jwt } = res.body;
      router.push(`/auth/login?email=${user.email}`);
    } else {
      // console.log('res err', response.body.error)
      // Handle errors
    }
  };

  return (
    <AuthLayout title="Ro'yxatdan o'tish">
      <Avatar
        sx={{ m: 1, bgcolor: "secondary.main", width: 56, height: 56 }}
        src={
          avatar ||
          "https://avatars.mds.yandex.net/i?id=d2161fd91a435a4528b4bdca7ab9a1149873d046-5847755-images-thumbs&n=13"
        }
      >
        {!avatar && <LockOutlinedIcon />}
      </Avatar>

      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2, mt: 2 }}>
        <TextField
          label="Avatar URL"
          variant="outlined"
          size="small"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
          sx={{ width: "100%" }}
        />
        <label htmlFor="avatar-upload">
          <input
            hidden
            accept="image/*"
            type="file"
            id="avatar-upload"
            onChange={handleAvatarFileChange}
          />
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          required
          label="Ism"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        {/* <TextField
          fullWidth
          margin="normal"
          required
          label="Familiya"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        /> */}
        <TextField
          fullWidth
          margin="normal"
          required
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          required
          label="Parol"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {/* <TextField
          fullWidth
          margin="normal"
          required
          label="Parolni tasdiqlang"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
        /> */}

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Ruyxatdan otish
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/auth/login" passHref>
              <Button variant="text" size="small">
                Hisobingiz bormi? Kirish
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}