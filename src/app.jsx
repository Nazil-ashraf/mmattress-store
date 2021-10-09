import Listing from "./pages/listing/listing";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";
import Home from "./pages/home/home";

const App = () => {
    return (
        <Router>

            <div>
                <Home/>
                <Routes/>
            </div>
        </Router>
    )
}

export default App