
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "pages/Home";
import { Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Admin from "pages/Admin";
import ProductDetails from "pages/ProductDetails";
import Auth from "pages/Admin/Auth";


const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact>
                <Catalog />
            </Route>
            <Route path="/product/:productId">
                <ProductDetails />
            </Route>
            <Redirect from="/admin/auth" to="/admin/auth/login" exact />
            <Route path="/admin/auth" >
                <Auth />
            </Route>
            <Redirect from="/admin" to="/admin/products" exact />
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
);


export default Routes;