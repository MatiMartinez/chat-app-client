import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
