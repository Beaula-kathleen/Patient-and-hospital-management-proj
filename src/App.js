// import logo from './logo.svg';
import { Route, Routes } from "react-router";
import "./App.css";
import { routeItems } from "./constant/routes";
import LoginAndSignin from "./pages/LoginAndSignin";

function App() {
  return (
    <div className="App">
      <Routes>
        {routeItems.map((element, id) => (
          <Route path={element.path} element={element.element}/>
        ))}
      </Routes>
      {/* <LoginAndSignin /> */}
    </div>
  );
}

export default App;
