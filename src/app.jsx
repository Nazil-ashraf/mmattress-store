import Listing from "./pages/listing/listing";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";
import Header from "./pages/home/header";

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Routes/>
            </div>
        </Router>
    )
}

export default App