import { Route, Routes } from "react-router-dom"; // Correct import
import "./App.css";
import { routeItems } from "./constant/routes";

function App() {
  return (
    <div className="App">
      <Routes> {/* Correctly use Routes */}
        {routeItems.map((element, id) => (
          <Route key={id} path={element.path} element={element.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
