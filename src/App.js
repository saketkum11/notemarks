import { Outlet } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import { MyRoute } from "./MyRoute/MyRoute";

function App() {
  return (
    <div className="App">
      <MyRoute />
      <Outlet />
    </div>
  );
}

export default App;
