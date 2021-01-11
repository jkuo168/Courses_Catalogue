import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilePage from "./pages/profile.js";
import CataloguePage from "./pages/catalogue.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CataloguePage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
