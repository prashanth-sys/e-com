import { Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/about" component={AboutUs} />
  </Switch>
);
export default App;
