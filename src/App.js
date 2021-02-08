import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Loginscreen from "./screens/loginscreen";
import Signupscreen from "./screens/signupscreen";

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Loginscreen} exact></Route>
      <Route path='/signup' component={Signupscreen}></Route>
    </BrowserRouter>
  );
}

export default App;
