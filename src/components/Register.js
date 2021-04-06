import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}











































































// import React, { Component } from "react";


// import { Card, CardContent, Grid, FormControl, Typography, TextField } from '@material-ui/core';
// import { Face } from '@material-ui/icons';


// const style = {
//   root: {
//     minWidth: 275,
//     backgroundColor:'#006064',
//     marginTop: 20,
//     color: '#e0f7fa'
//   },
// }

// export default class Register extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//       message: "",
//       successful: false
//     };
//   }

//   onChangeUsername = (e) => {
//     this.setState({
//       username: e.target.value
//     });
//   }

//   onChangeEmail = (e) => {
//     this.setState({
//       email: e.target.value
//     });
//   }

//   onChangePassword = (e) => {
//     this.setState({
//       password: e.target.value
//     });
//   }

//   handleRegister = (e) => {
//     e.preventDefault();

//     if (this.state.username && this.state.email && this.state.password) {
//       console.log(this.state.username + " " + this.state.password + " " + this.state.email)
//       this.setState({
//         successful: true,
//         message: "Registered successfully"
//       })
//     } else {
//       this.setState({
//         successful: false,
//         message: "username/password/email is empty"
//       })
//     }
//   }

//   render() {
//     return (
//       <Grid container>
//         <Grid item xs={4}/>
//         <Grid item xs={1}/>
//         <Grid item xs={3}>
//           <Card style={style.root}>
//               <CardContent>
//                 <form onSubmit={this.handleRegister}>
//                   {!this.state.successful && (
//                   <Grid container spacing={1}>
//                       <Grid item xs={12}>
//                         <Face style={{ fontSize: 80 }}/>
//                       </Grid>
                      
//                       <Grid item xs={12}>
//                         <FormControl fullWidth>
//                           <label htmlFor="username">Username</label>
//                           <TextField type="text" name="username" value={this.state.username}
//                             onChange={this.onChangeUsername}/>
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12}>
//                         <FormControl fullWidth>
//                           <label htmlFor="email">Email</label>
//                           <TextField type="text" name="email" value={this.state.email}
//                             onChange={this.onChangeEmail}/>
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12}>
//                         <FormControl fullWidth>
//                           <label htmlFor="password">Password</label>
//                           <TextField type="password" name="password" value={this.state.password}
//                             onChange={this.onChangePassword}/>
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12}>
//                         <FormControl>
//                           <button>Sign Up</button>
//                         </FormControl>
//                       </Grid>
//                   </Grid>
//                   )}
//                   {
//                     this.state.message && (
//                     <div>
//                       <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
//                           <strong>{this.state.message}</strong>
//                       </Typography>
//                     </div>
//                   )
//                   }
//                 </form>
//               </CardContent>
//         </Card>
//         </Grid>
//         <Grid item xs={4}/>
//       </Grid>
//     );
//   }
// }
