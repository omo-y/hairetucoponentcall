import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./Router/Router";
import { HOME } from "./HOME";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">HOME</Link>
        <br />
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <br />
        <Link to="/Page2">Page2</Link>
      </div>

      <Router />
    </BrowserRouter>
  );
}
