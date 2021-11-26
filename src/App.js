import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/Books/View";
import Edit from "./components/Books/Edit";

import './index.css'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component = {Home} /> 
          <Route exact path="/view/:id" component = {View} /> 
          <Route exact path="/edit/:id" component = {Edit} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;

// json-server --watch db.json --port 3333