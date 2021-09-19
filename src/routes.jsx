import {Route, Switch} from "react-router-dom";
import Listing from "./pages/listing/listing";
import ProductDetails from "./pages/listing/product-details";
import {Home} from "./pages/home/home";

const Routes = () => {
    return (
        <div className="routes">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/mattress" exact component={Listing} />
                <Route path="/mattress/:id?" component={ProductDetails}/>
            </Switch>
        </div>
    )
}

export default Routes