import {IconButton, InputBase, Paper} from "@material-ui/core";
import {Bookmark, Person, SearchOutlined, ShoppingCart} from "@material-ui/icons";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={"homepage--heading"}>
            <div className={"home--button"}>
                <div className={"home--heading--title"}><h1 className={"h1"}>matress</h1></div>
                <div className="buttons--wrap">
                    <button className={"button"}><label className={"label"}>home</label></button>
                    <div className="dropdown-content">
                        <a href="#">Order</a>
                        <a href="#">return</a>
                        <a href="#">Customer issue</a>
                    </div>
                </div>
                <div className={"buttons--wrap"}>
                    <button className={"button"}><label className={"label"}>about</label></button>
                    <div className="dropdown-content">
                        <a href="#">owned  by "ZIANE"</a>

                    </div>
                </div>
                <div className={"buttons--wrap"}>
                    <button className="button"><label className={"label"}>contact</label></button>
                </div>
                <div className={"buttons--wrap"}>
                    <button className={"button"}><label className={"label"}>category</label> </button>
                </div>
                <div className={"search"}>
                    <Paper
                        component="form"
                        sx={{ p: '9px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    ><InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder=" Search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" size={"small"}>
                            <SearchOutlined />
                        </IconButton>
                    </Paper>
                </div>
                <div className={"icons"}>
                    <div className={"home--cart"}>
                        <Link to="/cart">
                            <ShoppingCart className={"color"}/>
                        </Link>
                    </div>
                    <div className={"home--wishlist"}>
                        <Bookmark className={"color"}/>
                    </div>
                    <div className={"home--profile"}>
                        <Person className={"color"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header