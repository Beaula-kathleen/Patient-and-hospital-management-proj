import { Route, Routes } from "react-router-dom"; // Correct import
import "./App.css";
import { routeItems } from "./constant/routes";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        {routeItems.map((element, id) => (
          <Route key={id} path={element.path} element={element.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
