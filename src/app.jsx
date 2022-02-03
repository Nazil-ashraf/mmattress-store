import Listing from "./pages/listing/listing";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";
import Home from "./pages/home/home";
import Header from "./pages/home/header";
import Footer from "./pages/home/footer";

const App = () => {
    return (
        <Router>

            <div>
                {/*<Header/>*/}
                <Routes/>
                {/*<Footer/>*/}
            </div>
        </Router>
    )
}

export default App