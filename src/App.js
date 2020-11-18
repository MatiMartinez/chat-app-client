import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Chat from "./views/chat/Chat";

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
