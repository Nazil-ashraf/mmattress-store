import {Route, Switch} from "react-router-dom";
import Listing from "./pages/listing/listing";
import ProductDetails from "./pages/listing/product-details";
import Login from "./pages/login/login";
import {Home} from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Registration from "./pages/registration/registration";

const Routes = () => {
    return (
        <div className="routes">
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/mattress" exact component={Listing} />
                <Route path="/mattress/:id?" component={ProductDetails}/>
            </Switch>
        </div>
    )
}

export default Routes