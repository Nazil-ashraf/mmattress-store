import './product-details.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../home/header";
import {StarBorderOutlined, StarRate} from "@material-ui/icons";

const ProductDetails = () => {

    const [mattress,setMattress]=useState({})
    const [cart, setCart] = useState({mattresses: []})
    const {id} = useParams()

    useEffect(loadData, [id])

    function loadData() {
        axios.get("/api/mattresses/" + id)
            .then(response => {
                setMattress(response.data)
            })
        axios.get("/api/cart/1")
            .then(res => setCart(res.data))
    }

    function updateQuantity(event) {

        const value = event.target.value
        if (value >= 0) {
            setMattress({...mattress, quantity: value})
        }
    }

    function addToCart() {
        const { mattresses } = cart
        let selected = mattresses.find(m => m.id === mattress.id);
        if (!selected) {
            selected = mattress
            mattresses.push(selected)
        }
        axios.put("/api/cart/1",{id: 1, mattresses})
    }

    return (
        <div className={"product-details"}>
            <Header/>
            <div className={"product-details--wrap"}>
                <div className={"product-details--wrap--content"}>
                  <img className={"product-details--wrap--content--image"} src={mattress.image}/>
                    <div className={"product-details--wrap--content--details"}>
                        <div className={"product-details--wrap--content--details--hovag"}>hover</div>
                        <div className={"product-details--wrap--content--details--rating"}>
                            <StarRate className={"product-details--wrap--content--details--rating--checked"} />
                            <StarRate className={"product-details--wrap--content--details--rating--checked"}/>
                            <StarRate className={"product-details--wrap--content--details--rating--checked"}/>
                            <StarBorderOutlined className={"product-details--wrap--content--details--rating--notchecked"}/>
                            <StarBorderOutlined className={"product-details--wrap--content--details--rating--notchecked"}/>
                        </div>
                        <div className={"product-details--wrap--content--details--price"}>{mattress.price}</div>
                        <button className={"product-details--wrap--content--details--button"}> Add to cart</button>
                        <hr className={"product-details--wrap--content--details--hr"}/>
                        <div className={"product-details--wrap--content--details--bedDetails"}>
                        <div className={"product-details--wrap--content--details--bedDetials--about"}>Bed size</div>
                        <div className={"product-details--wrap--content--details--bedDetials--about"}>Type</div>
                        <div className={"product-details--wrap--content--details--bedDetials--about"}>Height</div>
                        <div className={"product-details--wrap--content--details--bedDetials--about"}>colour</div>
                            <div className={"product-details--wrap--content--details--bedDetails--about"}>layers</div>
                            <div className={"product-details--wrap--content--details--bedDetails--about"}>Comfort</div>
                           <div className={"product-details--wrap--content--details--bedDetails--about"}>Manfactures</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="product-details">
        //     <div className="product-details--image">
        //         <img className="product-details--image" src={mattress.image}/>
        //     </div>
        //     <div>
        //         <div className="product-details--details--header">Mattress-Store</div>
        //         <div className="product-details--details">
        //             <div className="product-details--details--type">Type</div>
        //             <div className="product-details--details--type">{mattress.type}</div>
        //             <div className="product-details--details--type">Comfort</div>
        //             <div className="product-details--details--comfort">{mattress.comfort}</div>
        //             <div className="product-details--details--type">Size</div>
        //             <div className="product-details--details--size">{mattress.size}</div>
        //             <label className="product-details--quantity--label">Qty</label>
        //             <input className="product-details--quantity--input" type="number" onChange={updateQuantity} value={mattress.quantity}/>
        //             <div className="product-details--details--type">Color</div>
        //             <div className="product-details--dimention--color" style={{backgroundColor:mattress.color}}></div>
        //             <div className="product-details--details--type">Height</div>
        //             <div className="product-details--dimention--height">{mattress.height}</div>
        //             <div className="product-details--details--type">Layers</div>
        //             <div className="product-details--dimention--layers">{mattress.layers}</div>
        //         </div>
        //         <div className="product-details--price">{mattress.price}$</div>
        //         <button className="product-details--button" onClick={addToCart}>Add</button>
        //
        //     </div>
        // </div>
    )
}

export default ProductDetails