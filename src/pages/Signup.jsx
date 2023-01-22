import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Link,
  TextField,
  Typography
} from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

const Signup = () => {


  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form >
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
                align="center"
              >
                Create a new account
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
              label="First Name"
              margin="normal"
              name="firstName"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Last Name"
              margin="normal"
              name="lastName"
              variant="outlined"
            />
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
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                name="policy"
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
              </Typography>
            </Box>
            <Box sx={{ py: 2 }}>
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
            <Typography
              color="textSecondary"
              variant="body2"
              align="center"
            >
              Have an account?
              {' '}
              <RouterLink
                to="/login"
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Sign In
                </Link>
              </RouterLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Signup;