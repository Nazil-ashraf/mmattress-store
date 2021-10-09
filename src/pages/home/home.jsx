// import './home.scss'
import {useEffect, useState} from "react";
import axios from "axios";
// import PersonIcon from '@mui/icons-material/Person';
// import {View} from "./component/view";
import { InputBase, Paper,IconButton } from "@material-ui/core";
import {Bookmark, Person, SearchOutlined, ShoppingCart} from "@material-ui/icons";
import CardView from "../listing/card-view";
import Listing from "../listing/listing";
import Header from "./header";
import matress from "./component/matress.jpeg";
import './home.scss'
import Footer from "./footer";
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
                    <div className={"homepage--body--content--image"}>
                        <img className={"homepage--body--content--image--matress"} src={matress} alt=""/>
                    </div>
                    <div className={"homepage--body--content--label"}>
                        <label className={"homepage--body--content--label--featuredproduct"}>Featured product</label>

                        <hr className={"homepage--body--content--line"}/>
                      </div>

                    <div className={"homepage--body--content--featuredlist"}>
                        {details.map(item => <Listing matress={item}/>)}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>

    )
}
export default Home