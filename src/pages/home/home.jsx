import './home.scss'
import {useEffect, useState} from "react";
import axios from "axios";
// import PersonIcon from '@mui/icons-material/Person';
// import {View} from "./component/view";
import { InputBase, Paper,IconButton } from "@material-ui/core";
import {Bookmark, Person, SearchOutlined, ShoppingCart} from "@material-ui/icons";
import CardView from "../listing/card-view";
import Listing from "../listing/listing";
export function Home(){
     const url="/api/mattresses"
     const[details,setdetials]=useState([])
    useEffect(()=>{
             axios.get(url)
             .then(response=> setdetials(response.data))
    }, [])

    return(
        <div className={"homepage"}>
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
                       <ShoppingCart className={"color"}/>
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
            <div className={"homepage--body"}>
                <div className={"homepage--body--heading"}>
                     <h1 className={"h2"}>  Matress that lets you<br/>finish every your dreams</h1>
                      <button>{details.map(elem=><Listing matress={elem}/>)}shop now</button>
                </div>
            {/*<div className={"homepage--matress--wrap"}>*/}
            {/*    {details.map(item=><CardView mattress={item}/>)}*/}
            {/*</div>*/}
            </div>
        </div>
    )
}