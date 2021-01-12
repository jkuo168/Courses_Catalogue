import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// IMPORT PROFILE PAGE
import CataloguePage from "./pages/catalogue.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CataloguePage} />
        {/* ADD IN PROFILE ROUTE */}
      </Switch>
    </Router>
  );
}

export default App;
