// import './home.scss'
import {useEffect, useState} from "react";
import axios from "axios";
// import PersonIcon from '@mui/icons-material/Person';
// import {View} from "./component/view";
import { InputBase, Paper,IconButton } from "@material-ui/core";
import {Bookmark, Person, SearchOutlined, ShoppingCart} from "@material-ui/icons";
import CardView from "../listing/card-view";
import Listing from "../listing/listing";
import matress from "./component/matress.jpeg";
import './home.scss'
import Header from "./header";

 export function Home(){
     const url="/api/mattresses"
     const[details,setdetials]=useState([])
    useEffect(()=>{
             axios.get(url)
             .then(response=> setdetials(response.data))
    }, [])


    return(
        <div className={"homepage"}>
            <Header/>
            <div className={"homepage--body"}>
                <div className={"homepage--body--content"}>
                    <div className={"homepage--body--content--image-wrap"}>
                        <img className={"homepage--body--content--image-wrap--matress"} src={matress} alt=""/>
                            <div className={"homepage--body--content--image-wrap--orthopedic"}>Orthopedic metress</div>
                            <div className={"homepage--body--content--image-wrap--offer"}>
                                <div className={"homepage--body--content--image-wrap--offer--flat"}>FLAT</div>
                                <div className={"homepage--body--content--image-wrap--offer--50"}>50%</div>
                                <div className={"homepage--body--content--image-wrap--offer--off"}>OFF</div>

                            </div>

                    </div>
                    <div className={"homepage--body--content--label"}>
                        <label className={"homepage--body--content--label--featuredproduct"}>Featured product</label>

                        <hr className={"homepage--body--content--line"}/>
                      </div>

                    {/*<div className={"homepage--body--content--featuredlist"}>*/}
                        <Listing/>
                    {/*</div>*/}
                </div>
            </div>
        </div>

    )
}
export default Home