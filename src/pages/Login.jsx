import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const Login = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4" align="center">
                Sign In
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                align="center"
              >
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox name="policy" />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <RouterLink to="/">
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </RouterLink>
              </Typography>
            </Box>
            <Box sx={{ py: 2,mx:0.5 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Divider  />
            <Box py={2}>

            <GoogleLoginButton  >
              <Box component="span" p={2}>
                Sign up with Google
              </Box>
            </GoogleLoginButton>
            <FacebookLoginButton>
              <Box component="span" p={2}>
                Sign up with Facebook
              </Box>
            </FacebookLoginButton>
            </Box>
            <Typography color="textSecondary" variant="body2" align="center">
              Don't have an account?{" "}
              <RouterLink to="/signup">
                <Link variant="subtitle2" underline="hover">
                  Sign up
                </Link>
              </RouterLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
