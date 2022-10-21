import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Popular } from "./pages/Popular";
import { Recent } from "./pages/Recent";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Popular">
          <Popular />
        </Route>
        <Route path="/Recent">
          <Recent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
