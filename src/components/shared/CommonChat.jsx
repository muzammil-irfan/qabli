import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Divider from '@material-ui/core/Divider';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';/
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import Fab from '@material-ui/core/Fab';
// import SendIcon from '@material-ui/icons/Send';
import { BiSend } from "react-icons/bi";
import {
  Grid,
  Paper,
  Box,
  Divider,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
  Avatar,
} from "@mui/material";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   chatSection: {
//     width: '100%',
//     height: '80vh'
//   },
//   headBG: {
//       backgroundColor: '#e0e0e0'
//   },
//   borderRight500: {
//       borderRight: '1px solid #e0e0e0'
//   },
//   messageArea: {
//     height: '70vh',
//     overflowY: 'auto'
//   }
// });

const CommonChat = () => {
  //   const classes = useStyles();

  return (
    <Box m={1}>
      <Grid
        container
        component={Paper}
        sx={{
          width: "100%",
          minHeight: "80vh",
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <List >
            <ListItem button key="Rehan">
              <ListItemIcon>
                <Avatar
                  alt="Rehan"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Rehan(Qabli Manager)"></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            <ListItem button key="Riaz">
              <ListItemIcon>
                <Avatar
                  alt="Riaz"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Riaz">Riaz</ListItemText>
              <ListItemText secondary="online" align="right"></ListItemText>
            </ListItem>
            <ListItem button key="Abdullah">
              <ListItemIcon>
                <Avatar
                  alt="Abdullah"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Abdullah">Abdullah</ListItemText>
            </ListItem>
            <ListItem button key="CindyBaker">
              <ListItemIcon>
                <Avatar
                  alt="Rameez"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Rameez">Rameez</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List
            sx={{
              height: "70vh",
              overflowY: "auto",
            }}
          >
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Hello, How can we help you?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="left"
                    primary="Hey, How can I order on your website"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Let me know you in a while"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="10:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                <BiSend />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommonChat;
