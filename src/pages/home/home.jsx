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