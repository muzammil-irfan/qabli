import {
    Box,
    IconButton,
    Typography,
    InputBase,
    Avatar,
    Menu,
    MenuItem,
    Chip,
  } from "@mui/material";
  import React from "react";
  import SearchIcon from "@mui/icons-material/Search";
  import CustomBaseButton from "../../components/shared/CustomBaseButton";
  import { BiEdit } from "react-icons/bi";
  import { ImCancelCircle } from "react-icons/im";
  import { IoEllipsisHorizontalCircle } from "react-icons/io5";
  import { KeyboardArrowDown } from "@mui/icons-material";
  import { FaShare } from "react-icons/fa";
  import AdminCommonTable from "../../components/admin/common/AdminCommonTable";
  
  export default function AdminOffer() {
  
    const tableData = [];
    const arr = [
      
      "Car parts Offer",
      "parts",
      "cash",
      "25 Jan 2022",
      "25 Jan 2023",
      "Rs 2,000",
      21,
      <Chip label="active"  />,
      <ActionMenu />,
    ];
    for (let i = 0; i < 20; i++) {
      tableData.push(arr);
    }
    return (
      <Box py={5}>
          
        <Box display="flex" justifyContent="space-between" m={1}>
          <Box display="flex">
            <Box
              display="flex"
              border="1px solid black"
              borderRadius="10px"
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
              <InputBase placeholder="Search anything" sx={{ width: "40vw" }} />
            </Box>
          </Box>
          <CustomBaseButton
            label="Add new offers"
            backgroundColor="primary.main"
            color="white"
            height="70%"
          />
        </Box>
        <AdminCommonTable
          header={headerData}
          body={tableData}
          type="pagination"
        />
      </Box>
    );
  }
  const headerData = [
    "Title",
    "Category",
    "Type",
    "Start Date",
    "End Date",
    "Amount",
    "Products",
    "status",
    "Options",
  ];
  function ActionMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {    
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <Box>
        <CustomBaseButton
          label={
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="2px"
              color="white"
            >
              <Box component="span" pb="5px">
                <FaShare color="#fff" size="18px" />
              </Box>
              Action
              <KeyboardArrowDown />
            </Box>
          }
          backgroundColor="primary.main"
          color="secondary.main"
          onClick={handleClick}
        />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <CustomBaseButton
              backgroundColor="#FFAD5A"
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  {" "}
                  <BiEdit size="24px" />
                  Edit Details
                </Box>
              }
              width="100%"
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomBaseButton
              backgroundColor="primary.main"
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  {" "}
                  <IoEllipsisHorizontalCircle size="24px" />
                  Change status
                </Box>
              }
              width="100%"
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomBaseButton
              backgroundColor="secondary.main"
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  {" "}
                  <ImCancelCircle size="24px" />
                  Delete   
                </Box>
              }
              width="100%"
            />
          </MenuItem>
        </Menu>
  
        {/* <CustomSelect
          options={options}
          label={
    
            }
            backgroundColor="var(--light-green)"
            width="200px"
            /> */}
      </Box>
    );
  }
  