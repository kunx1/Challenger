import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import Navbar from "./components/Navbar";
import Team from "./pages/Team";

function App() {
  useEffect(() => {
    if (localStorage.getItem("tokenUser") === null) {
      localStorage.setItem("tokenUser", "");
    }
  }, []);
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <Switch>
            <Route path="/login" exact component={Login} />
            <PrivateRoutes component={Home} path="/" />   <PrivateRoutes component={Team} path="/equipo" />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
