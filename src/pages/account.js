import {
  Avatar,
  Box,
  Container,
  Divider,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MainLayout from "@/components/common/layouts/MainLayout";
import { useState, useEffect } from "react";

export default function Account() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    router.replace("/auth/login");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ borderRadius: 3, p: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar src={user?.avatar} sx={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item xs>
            <Typography variant="h5">
              {user?.name} {user?.lastName}{" "}
            </Typography>
            <Typography color="text.secondary">{user?.email}</Typography>
            <Typography color="text.secondary">Premium azo</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography variant="h6" gutterBottom>
            Foydalanuvchi malumotlari
          </Typography>
          <Typography>
            <strong>Ism:</strong> {user?.name}
          </Typography>
          <Typography>
            <strong>Familiya:</strong> {user?.lastName}
          </Typography>
          <Typography>
            <strong>Email:</strong> {user?.email}
          </Typography>
          <Typography>
            <strong>Ro‘yxatdan o‘tgan sana:</strong> 2024-01-10
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Button
            sx={{ marginRight: "20px" }}
            startIcon={<SettingsIcon />}
            variant="outlined"
          >
            Sozlamalar
          </Button>
          <Button
            onClick={handleLogOut}
            variant="contained"
            color="error"
            startIcon={<LogoutIcon />}
          >
            Chiqish
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

Account.getLayout = (pageProps) => (
  <MainLayout>
    <Account {...pageProps} />
  </MainLayout>
);
