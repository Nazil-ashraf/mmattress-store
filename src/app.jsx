import Listing from "./pages/listing/listing";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";

const App = () => {
    return (
        <Router>
            <Routes/>
        </Router>
    )
}

export default App