import {
  Box,
  Typography,
  Stack,
  SvgIcon,
  Paper,
  Collapse,
  Button,
} from "@mui/material";
import React from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import { MdOutlineInventory, MdTrackChanges,MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { HiOutlineCash } from "react-icons/hi";
import {BiBorderRight} from "react-icons/bi";
import TopHeader from "../components/AdminLayout/TopHeader";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <Box display="flex">
      <Box
        width="250px"
        py={2}
        display="flex"
        flexShrink={0}
        flexDirection="column"
        justifyContent="center"
        component={Paper}
        boxShadow="md"
        height="full"
        minHeight="100vh"
        elevation={10}
        backgroundColor="primary.main"
        
      >
        <Typography align="center" variant="h3" fontWeight="bold" color="secondary.main" backgroundColor="white" py={5}>Qabli</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        
        >
          <Stack spacing={4} py={4} justifyContent="space-evenly" minHeight="70vh">
            {navList.map((item, index) => {
              if (item.href) {
                return <NavLinkBox item={item} index={index} />;
              }
              return (
                <Box key={index}>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ cursor: "pointer" }}
                    color="white"
                    // onClick={() => {
                    //   setOpen((val) => !val);
                    // }}
                  >
                    <SvgIcon component={item.icon} sx={{ fontSize: "30px" }} />
                    <Typography mx={1}>{item.label}</Typography>
                    
                    <ExpandMore />
                  </Box>

                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Stack spacing={1} pt={1}>
                      {item.list?.map((listItem, index) => (
                        <NavLinkBox item={listItem} key={index} />
                      ))}
                    </Stack>
                  </Collapse>
                </Box>
              );
            })}
          </Stack>

          <Button
            variant="contained"
            startIcon={<LogoutIcon />}
            sx={{
              marginTop: 4,
              backgroundColor: "white",
              color: "secondary.main",
              fontWeight: "bold",
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
      <Box width="100%" m="10px 8px">
        <TopHeader />
        <Box m={1}>
            <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
function NavLinkBox({ item }) {
    const {pathname} = useLocation();
    
  return (
    <Link to={item.href} >
      <Box display="flex"  color={pathname.includes(item.href) ? "secondary.main" : "white"    }  alignItems="center" sx={{ cursor: "pointer" }}>
        {item.icon ? (
          <SvgIcon component={item.icon} sx={{ fontSize: "30px" }} />
        ) : (
          <Box ml={4} p="5px" backgroundColor="white"  borderRadius={2} />
        )}
        <Typography mx={1}>{item.label || item.name}</Typography>
      </Box>
    </Link>
  );
}
const navList = [
//   {
//     label: "Dashboard",
//     icon: DashboardIcon,
//     href: "/admin/dashboard",
//   },
  {
    label: "Products",
    icon: MdOutlineInventory,
    href: "/product",
  },
  {
    label: "Listing Approval",
    icon: BiBorderRight,
    href: "/listing",
  },
  {
    label: "Order Tracking",
    icon: MdTrackChanges,
    href: "/order",
  },
  {
    label: "Offers",
    icon: HiOutlineCash,
    href: "/offer",
  },
  {
    label: "Commissions",
    icon: RiCoupon3Line,
    href: "/commission",
  },
  {
    label: "Vendors",
    icon: MdOutlineInventory,
    href: "/vendor",
  },
  {
    label: "Users",
    icon: MdOutlineAdminPanelSettings,
    href: "/user",
  },
];
