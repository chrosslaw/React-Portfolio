import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Route path="/about"></Route>
        <Route path="/sign-up"></Route>
        <Route path="/articles"></Route>
        <Route path="/categories"></Route>
        <Route path="/profile"></Route>
      </main>
    </Router>
  );
}

export default App;
