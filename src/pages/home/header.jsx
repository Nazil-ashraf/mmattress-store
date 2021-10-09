import './header.scss'
import { IconButton, InputBase, Paper} from "@material-ui/core";
import {
    AccountCircle,
    SearchOutlined,
    ShoppingCart, ShoppingCartOutlined
} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import image from "./component/sleep.jpg";
import logo from "./component/logo.png";
import matress from "./component/matress.jpeg"
import './home.scss'

import CardView from "../listing/card-view";

export function Header () {
    const url="/api/mattresses"
    const[details,setdetials]=useState([])
    useEffect(()=>{
        axios.get(url)
            .then(response=> setdetials(response.data))
    }, [])

    return (
            <div className={"header"}>
                <div className={"header--logo"}>
                    <img className={"header--logo--image"} src={logo} alt=""/>
                </div>
                <div className={"header--title"}>
                    <div className={"header--title--head"}>mattress</div>
                    <div className={"header--title--subheading"}>your dream store</div>
                </div>
                <div className={"header--search"}>
                              <input className={"head--search--content--input"} type={"search"} placeholder={"Search"}/>
                                  <SearchOutlined  className={"header--search--paper--searchButton"} />
                           </div>
                     <div className={"header--profile"}>
                      <AccountCircle className={"header--profile--icon"}/>

                    </div>
                    <div className={"header--cart"}>
                     <Link to={"/cart"}>
                      <ShoppingCartOutlined className={"header--cart--icon"}/>
                     </Link>
                    </div>
                    <div className={"home--wishlist"}>
                        <Bookmark className={"color"}/>
                    </div>
                    <div className={"home--profile"}>
                        <Link to="/login">
                            <Person className={"color"} />
                        </Link>
                    </div>
                </div>

        //     {/*    <div className="buttons--wrap">*/}
        //     {/*        <button className={"button"}><label className={"label"}>home</label></button>*/}
        //     {/*        <div className="dropdown-content">*/}
        //     {/*            <a href="#">Order</a>*/}
        //     {/*            <a href="#">return</a>*/}
        //     {/*            <a href="#">Customer issue</a>*/}
        //     {/*        </div>*/}
        //     {/*    </div>*/}
        //     {/*    <div className={"buttons--wrap"}>*/}
        //     {/*        <button className={"button"}><label className={"label"}>about</label></button>*/}
        //     {/*        <div className="dropdown-content">*/}
        //     {/*            <a href="#">owned  by "ZIANE"</a>*/}
        //
        //     {/*        </div>*/}
        //     {/*    </div>*/}
        //     {/*    <div className={"buttons--wrap"}>*/}
        //     {/*        <button className="button"><label className={"label"}>contact</label></button>*/}
        //     {/*    </div>*/}
        //     {/*    <div className={"buttons--wrap"}>*/}
        //     {/*        <button className={"button"}><label className={"label"}>category</label> </button>*/}
        //     {/*    </div>*/}
        //     {/*
        //     {/*        <div className={"home--cart"}>*/}
        //     {/*            <Link to="/cart">*/}
        //     {/*                <ShoppingCart className={"color"}/>*/}
        //     {/*            </Link>*/}
        //     {/*        </div>*/}
        //     {/*        <div className={"home--wishlist"}>*/}
        //     {/*            /!*<div className={"wishlist"}>*!/*/}
        //     {/*            <Checkbox  icon={<FavoriteBorder className={"wishlist"}/>} checkedIcon={<Favorite className={"wishlist"}/>} />*/}
        //     {/*            /!*</div>*!/*/}
        //
        //     {/*        </div>*/}
        //     {/*        <div className={"home--profile"}>*/}
        //     {/*            <Person className={"profile"} />*/}
        //     {/*        </div>*/}
        //     {/*    </div>*/}
        //
        //     {/*<div className={"homepage--body--heading"}>*/}
        //     {/*    /!*<h1 className={"h2"}>  Matress that lets you<br/>finish every your dreams</h1>*!/*/}
        //     {/*     /!*<link to={'/mattress'}>*!/*/}
        //     {/*     /!*    <button>shop now</button>*!/*/}
        //     {/*     /!*</link>*!/*/}
        //     {/*    /!*{details.map(elem=><CardView matress={elem}/>)}*!/*/}
        //     {/*    /!*<div className="container">*!/*/}
        //     {/*    /!*    <img src={image} alt="" style="width:100%">*!/*/}
        //     {/*    /!*        <button className={"btn"} >  {details.map(item=><Listing item={item}/>)}</button>*!/*/}
        //     {/*    /!*    </img>*!/*/}
        //     {/*    /!*</div>*!/*/}
        //
        //
        //     {/*</div>*/}
        // // </div>
    )
}

export default Header