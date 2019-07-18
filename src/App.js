import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About(match) {
  console.log(match);
  return <h2>About</h2>;
}

function Users(match) {
  console.log(match);
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" render={() => <Users params="HiHi" />} />
      </Switch>
    </Router>
  );
}

export default App;
