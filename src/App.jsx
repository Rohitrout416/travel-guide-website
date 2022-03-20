import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import ResponsiveAppBar from "./components/Navbar";
import Register from "./components/Register";
import Map from "./components/Map";
import Karnataka from "./components/States/Karnataka.jsx";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <ResponsiveAppBar />
            <Route exact path={"/home"}>
              <Home />
            </Route>
            <Route exact path={"/home/karnataka"}>
              <Karnataka />
            </Route>
            <Route exact path={"/home/goa"}>
              <Karnataka />
            </Route>
            <Route exact path={"/home/rajasthan"}>
              <Karnataka />
            </Route>
            <Route exact path={"/home/kerala"}>
              <Karnataka />
            </Route>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/test">
            <Map />
          </Route>

          <Route path="/">
            <ResponsiveAppBar />
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
