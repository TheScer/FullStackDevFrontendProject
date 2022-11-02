import "./App.css";
import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Popular } from "./pages/Popular.js";
import { JobHunt } from "./pages/JobHunt";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/popular">
          <Popular />
        </Route>

        <Route path="/jobhunt">
          <JobHunt />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
