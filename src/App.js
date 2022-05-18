import { Outlet } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import { MyRoute } from "./MyRoute/MyRoute";
import { Header } from "./Page";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MyRoute />
    </div>
  );
}

export default App;
