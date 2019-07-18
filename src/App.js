import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import Wrapper from "./component/outer/wrapper";
import Home from "./component/home/index.jsx";
import Pages from "./component/pages/index.jsx";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/info/:pages" component={Pages} />
    </Router>
  );
}

export default App;
