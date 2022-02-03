import './cartview.scss'
import {useEffect, useState} from "react";
import Header from "../home/header";
import {ExpandMore, StarBorderOutlined, StarRate} from "@material-ui/icons";
import axios from "axios";
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Slider} from "antd";
import Footer from "../home/footer";
import '../listing/card-view'

export   function Cartview() {

    const [mattresses, setMattresses] = useState([])
    const [slidervalue,setSlidervalue]=useState([])
    useEffect(() => {
        axios.get("/api/mattresses")
            .then(response => setMattresses(response.data))
    }, [])

    function readValue(value) {
        setSlidervalue(value)
        console.log('onChange: ', value);
    }
    function onAfterChange(value) {
        console.log('onAfterChange: ', value);
    }
    function filterPrice(){
        const filter_arr=[...mattresses]
        const min = slidervalue[0]
        const max =slidervalue [1]
        console.log(min)
        console.log(max)
        const price_arr=filter_arr.filter(e=> e.price >= min && e.price <= max)
        setMattresses(price_arr)
        console.log(price_arr)
    }
        return (

            <div className={"cart-view"}>
                <Header/>
                <div className={"cart-view--content"}>
                    <div className={"cart-view--content--filters"}>
                        <div className={"cart-view--content--filters--size"}>
                            <div className={"cart-view--content--filters--size--name"}>Size</div>
                            <ExpandMore className={"cart-view--content--filters--size--icon"}/>
                        </div>
                        <div className={"cart-view--content--filters--type"}>
                            <div className={"cart-view--content--filters--type--name"}>Type</div>
                            <ExpandMore className={"cart-view--content--filters--type--icon"}/>
                        </div>

                        {/*<div onClick={handleprice} className={"cart-view--content--filters--price"}>*/}
                        {/*    <div className={"cart-view--content--filters--price--name"}>Price</div>*/}
                        {/*    <ExpandMore className={"cart-view--content--filters--price--icon"}/>*/}
                        {/*    <div className="cart-view--content--filters--price--popuptext" id="myPopup">*/}

                        <div className={"cart-view--content--filters--popover"}>
                            <a href={"#"}>
                                <div className={"cart-view--content--filters--popover--price"}>
                                <div className={"cart-view--content--filters--popover--price--name"}>price</div>
                                <ExpandMore className={"cart-view--content--filters--popover--price--icon"}/>
                                </div>
                            </a>
                                <div className={"cart-view--content--filters--popover--content"}>
                                    <div className={"cart-view--content--filters--popover--content--range"}>
                                        ₹{slidervalue[0]}-₹{slidervalue[1]}
                                    </div>
                                    <Slider
                                        className={"cart-view--content--filters--popover--content--slider"}
                                        range
                                        step={10}
                                        defaultValue={[0,5000]}
                                        max={1500}
                                        onChange={readValue}
                                        onAfterChange={onAfterChange}
                                    />
                                    <div>

                                    {/*₹000 -{slidervalue[0]}*/}
                                    {/*₹{slidervalue[1]}*/}
                                    </div>

                                <button  className={"cart-view--content--filters--popover--content--apply"} onClick={filterPrice}>Apply</button>
                            </div>
                        </div>
                        <div className={"cart-view--content--filters--sort"}>
                            <div className={"cart-view--content--filters--sort--sortby"}>Sort By |</div>
                            <div className={"cart-view--content--filters--sort--price"}>price</div>
                            <ExpandMore className={"cart-view--content--filters--sort--icon"}/>
                        </div>
                    </div>
                    <hr className={"cart-view--content--hr"}/>
                    <div className={"cart-view--content--listing"}>
                        {mattresses.map((mattress)=>
                            <div className="cart-view--content--listing--card-view">
                                <Link to={`/mattresses/${mattress.id}`}>
                                    <div className="cart-view--content--listing--card-view--image">
                                        <img className="cart-view--content--listing--card-view--image--img" src={mattress.image}/>
                                    </div>
                                </Link>
                                <div className="cart-view--content--listing--card-view--details">
                                    <div className="cart-view--content--listing--card-view--details--header">HOVAG</div>
                                    <div
                                        className="cart-view--content--listing--card-view--details--type">{mattress.type} ,{mattress.comfort}</div>
                                    <div
                                        className="cart-view--content--listing--card-view--details--price">₹ {mattress.price}</div>
                                    <div className={"cart-view--content--listing--card-view--details--rating"}>
                                        <StarRate
                                            className={"cart-view--content--listing--card-view--details--rating--checked"}/>
                                        <StarRate
                                            className={"cart-view--content--listing--card-view--details--rating--checked"}/>
                                        <StarRate
                                            className={"cart-view--content--listing--card-view--details--rating--checked"}/>
                                        <StarBorderOutlined
                                            className={"cart-view--content--listing--card-view--details--rating--notchecked"}/>
                                        <StarBorderOutlined
                                            className={"cart-view--content--listing--card-view--details--rating--notchecked"}/>
                                    </div>
                                </div>
                            </div>)}
                    </div>

                </div>
                <Footer/>

            </div>
        )
        //     return(
        //     <div className={"cartview"}>
        //         <div className={"cartview--wrapper"}>
        //             <div className={"cartview--wrapper--image"}>
        //                 <img className={"cartview--wrapper--image--item"} src={item.image}/>
        //                 <div className={"cartview--wrapper--image--product"}>
        //                     <div className={"cartview--wrapper--image--product--details"}>Comfort: {item.comfort}</div>
        //                     <div className={"cartview--wrapper--image--product--details"}>color: {item.color}</div>
        //                     <div className={"cartview--wrapper--image--product--details"}>Height: {item.height}</div>
        //                     <div className={"cartview--wrapper--image--product--details"}>Layers: {item.layers}</div>
        //                 </div>
        //             </div>
        //             <div className={"cartview--wrapper--details"}>
        //                 <div className={"cartview--wrapper--details--price"}>$ {item.price}</div>
        //                 <div className={"cartview--wrapper--details--overall"}>
        //                     <div className={"cartview--wrapper--details--overall--title"}>Qty</div>
        //                     <input type="number" value={item.quantity} onChange={updateQuantity} className={"cartview--wrapper--details--overall--enter"}/>
        //                 </div>
        //                 <button className={" "}>delete</button>
        //             </div>
        //
        //         </div>
        //
        //     </div>
        // )

    }
 export default Cartview


