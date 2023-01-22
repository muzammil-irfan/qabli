import {
  Box,
  Paper,
  Button,
  InputBase,
  IconButton,
  SvgIcon,
  Typography,
  Avatar,
  Badge,
} from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CropFreeIcon from "@mui/icons-material/CropFree";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function TopHeader({ searchBar }) {
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
      }}
    >
      <Box />
      <Box display="flex">
        {iconList.map((item, index) => (
          <IconButton aria-label={item.href} key={index}>
            <Badge badgeContent={4} color="primary">
              <SvgIcon component={item.icon} />
            </Badge>
          </IconButton>
        ))}
        <Box display="flex" gap={1} px={1} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 49, height: 49, borderRadius: "5px" }}
          />
          <Box>
            <Typography fontWeight="bold">Qabli Manager</Typography>
            <Typography gap={1} color="var(--white-gray)">
              Admin
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
const iconList = [
  {
    href: "/",
    icon: NotificationsNoneIcon,
  },
  {
    href: "/",
    icon: ChatBubbleOutlineOutlinedIcon,
  },
];
