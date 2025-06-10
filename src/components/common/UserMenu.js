import { useState } from "react";
import {
  Menu,
  MenuItem,
  Avatar,
  IconButton,
  Tooltip,
  Fade,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";

export default function UserMenu(props) {
  const router = useRouter();

  const { logOut, avatar } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isXLargeScreen = useMediaQuery("(min-width:1800px)");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAcc = () => {
    setAnchorEl(null);
    router.push("/account");
  };

  return (
    <>
      <Tooltip title="Hisob menyusi">
        <IconButton
          onClick={handleClick}
          sx={{
            width: 73,
            height: 73,
            padding: 0,
            border: "4px solid #fff",
            backgroundColor: "#c4c4c4",
            overflow: "hidden",
          }}
        >
          <Avatar
            alt="John Doe"
            src={
              avatar ||
              'sabers.jpg'
            }
            sx={{ width: 70, height: 70 }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        keepMounted
        disablePortal
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleAcc}>Profil</MenuItem>
        <MenuItem onClick={handleClose}>Sozlamalar</MenuItem>
        {!isXLargeScreen && (
          <MenuItem onClick={handleClose}>qoshildi</MenuItem>
        )}
        <MenuItem
          onClick={logOut}
          sx={{
            color: "red",
          }}
        >
          Chiqish
        </MenuItem>
      </Menu>
    </>
  );
}