import {
  Box,
  Paper,  
  IconButton,
  SvgIcon,
  Typography,
  Avatar,
  Badge,
} from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {Link} from "react-router-dom"
export default function TopHeader({ logo }) {

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
      }}
    >
      <Box >
        {
          logo && <Link to="/"><Typography variant="h4" color="black" fontWeight="bold">Qabli</Typography></Link>
        }
      </Box>
      <Box display="flex">
        {iconList.map((item, index) => (
          <Link to={item.href} target={item.href==="/chat" ? "_blank":"none"}>
          <IconButton aria-label={item.href} key={index}>
            <Badge badgeContent={4} color="primary">
              <SvgIcon component={item.icon} />
            </Badge>
          </IconButton>
          </Link>
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
    href: "/chat",
    icon: ChatBubbleOutlineOutlinedIcon,
  },
];
