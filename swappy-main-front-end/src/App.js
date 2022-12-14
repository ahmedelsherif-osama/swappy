import LayoutRoute from "./LayoutRoute";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import { BrowserRouter, Switch } from "react-router-dom";
import ProductPage from "./ProductPage";
import RegistrationScreen from "./RegistrationScreen";
import AddProductScreen from "./AddProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/about" exact={true} component={AboutScreen} />
        <LayoutRoute path="/login" exact={true} component={LoginScreen} />
        <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
        <LayoutRoute path="/product" exact={true} component={ProductPage} />
        <LayoutRoute path="/product-listing" exact={true} component={ProductListing} />
        <LayoutRoute path="/cart" exact={true} component={Cart} />
        <LayoutRoute path="/add-product" exact={true} component={AddProductScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;