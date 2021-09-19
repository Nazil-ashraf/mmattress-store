import {Route, Switch} from "react-router-dom";
import Listing from "./pages/listing/listing";
import ProductDetails from "./pages/listing/product-details";
import Login from "./pages/login/login";

const Routes = () => {
    return (
        <div className="routes">
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/mattress" exact component={Listing} />
                <Route path="/mattress/:id?" component={ProductDetails}/>
            </Switch>
        </div>
    )
}

export default Routes