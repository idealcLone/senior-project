import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
