import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import Login from "./components/Login";
import Signup from "./components/Register";
//import Register from "./components/Register";
import Register from "./components/SignInSide";
import Home from "./components/Home1";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import { AccountCircle } from "@material-ui/icons";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Dashboard from "./components/Dashboard";
import Chart from "./components/Chart";
import Deposits from "./components/Deposits";
import ListItems from "./components/ListItems";
import Orders from "./components/Orders";
import Title from "./components/Title";
import SignInSide from "./components/SignInSide";
import Album from "./components/Album";
//import Form from "./components/main"
//import main from "./components/main";
// import Main from "./components/Main";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//      <main />
//     </div>
//   );
// }

// export default App;
const style = {
  paper: {
    flexGrow: 1,
    backgroundColor: '#1a237e',
    color: '#c5cae9'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "#1a237e"
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    let user;
    if (localStorage.getItem('username')) {
      user = {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      };
    }

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut () {
    localStorage.clear()
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>
                <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Button href="/" color='inherit'>
                  <Typography><strong>Digital OSA</strong></Typography>
                </Button>
               
                 {/* <Button href="/Maincommunity" color='inherit'>
                    <strong>MainCommunity</strong>
                  </Button> */}
                 {showAdminBoard && 
                 <Button href="/Subcommunity"  color='inherit'>
                    <strong>SubCommunity</strong>
                  </Button>
                  }   
                
                {showAdminBoard && (
                  <Button href="/admin" color='inherit'>
                    <strong>Admin Board</strong>
                  </Button>
                )}
                {currentUser && (
                  <Button href="/user" color='inherit'>
                    <strong>User</strong>
                  </Button>
                )}
              </Paper>
              
              {currentUser ? (
                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                 
                </Paper>
              )}
            </Toolbar>
          </AppBar>

          <div>
            <Switch>
              {/* <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} /> */}
              {/* <Route path="/user" component={BoardUser} />
              <Route path="/admin" component={BoardAdmin} /> */}
              <Route exact path={["/","/Blog"]} component={Blog} /> 
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/Chart" component={Chart} />
              <Route exact path="/login" component={SignInSide} />
              <Route exact path="/Signup" component={Register} />
              <Route exact path="/SubCommunity" component={Album} />
               {/* <Route exact path="/main" component={main} /> */}
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

 {/* <Button href="/home" color='inherit'>
                  <strong>Home</strong>
                </Button> */}