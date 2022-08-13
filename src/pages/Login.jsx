import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("email"),
      password: data.get("password")
    });
  };
  React.useEffect(()=>{
    const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
  })

  return (
    
    // <Container component="main" maxWidth="xs">
    //   <Box
    //     sx={{
    //       marginTop: 8,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center"
    //     }}
    //   >
    //     <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Log In
    //     </Typography>
    //     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="email"
    //         label="Email Address"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //       />
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //       />
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}
    //       >
    //         Login In
    //       </Button>
    //       <Grid container>
    //         <Grid item>
    //           <RouterLink to="/register">
    //             <Link href="#" variant="body2">
    //               {"Don't have an account? Sign Up"}
    //             </Link>
    //           </RouterLink>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Box>
    // </Container>
    
    
    <div>
        <div class="container" id="container">
	        <div class="form-container sign-up-container">
		        <form onSubmit={handleSubmit}>
			        <h1>Create Account</h1>
			        <div class="social-container">
				        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			        </div>
			        <span>or use your email for registration</span>
			        <input type="text" placeholder="Name" />
			        <input type="email" placeholder="Email" />
			        <input type="password" placeholder="Password" />
			        <button>Sign Up</button>
		        </form>
	        </div>
	        <div class="form-container sign-in-container">
		        <form action="#">
			        <h1>Sign in</h1>
			        <div class="social-container">
				        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			        </div>
			        <span>or use your account</span>
			        <input type="email" placeholder="Email" />
			        <input type="password" placeholder="Password" />
			        <a href="#">Forgot your password?</a>
			        <button>Sign In</button>
		        </form>
	        </div>
	        <div class="overlay-container">
		        <div class="overlay">
			        <div class="overlay-panel overlay-left">
				        <h1>Welcome Back!</h1>
				        <p>To keep connected with us please login with your personal info</p>
				        <button class="ghost" id="signIn">Sign In</button>
			        </div>
			        <div class="overlay-panel overlay-right">
				        <h1>Hello, Friend!</h1>
				        <p>Enter your personal details and start journey with us</p>
				        <button class="ghost" id="signUp">Sign Up</button>
			        </div>
		        </div>
	        </div>
        </div>
    </div>
  
)};

