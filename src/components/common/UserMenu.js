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
              "https://avatars.mds.yandex.net/i?id=d2161fd91a435a4528b4bdca7ab9a1149873d046-5847755-images-thumbs&n=13"
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
        TransitionComponent={Fade}
        keepMounted
        disablePortal
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            borderRadius: 2,
            minWidth: 160,
          },
        }}
      >
        <MenuItem onClick={handleAcc}>Profil</MenuItem>
        <MenuItem onClick={handleClose}>Sozlamalar</MenuItem>
        {!isXLargeScreen && (
          <MenuItem onClick={handleClose}>qo'shildi</MenuItem>
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