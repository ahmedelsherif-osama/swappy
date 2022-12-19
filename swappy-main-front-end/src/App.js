import LayoutRoute from "./LayoutRoute";
import HomeScreen from "./HomeScreen";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProductScreen from "./AddProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/login" exact={true} component={LoginScreen} />
        <LayoutRoute path="/registration" exact={true} component={RegistrationScreen} />
        <LayoutRoute path="/sell" exact={true} component={AddProductScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;