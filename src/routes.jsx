import {Route, Switch} from "react-router-dom";
import Listing from "./pages/listing/listing";
import ProductDetails from "./pages/listing/product-details";
import Header from "./pages/home/header";
import Login from "./pages/login/login";
import {Home} from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Registration from "./pages/registration/registration";
import {Cartview} from "./pages/cart/cartview";
import PriceSlider from "./pages/cart/price-slider";




const Routes = () => {
    return (
        <div className="routes">
            <Switch>
                {/*<Route path="/" component={Header} />*/}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/mattress" exact component={Listing} />
                <Route path="/mattresses/:id" component={ProductDetails}/>
                <Route path={"/mattress/cart-view"} exact component={Cartview}/>
                <Route path={"/mattress/slider"} component={PriceSlider}/>
            </Switch>
        </div>
    )
}

export default Routes