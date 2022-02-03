import './product-details.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../home/header";
import {StarBorderOutlined, StarRate} from "@material-ui/icons";
import Footer from "../home/footer";

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


    function addToCart() {
        const { mattresses } = cart
        let selected = mattresses.find((m) => m.id === mattress.id);
        if (!selected) {
            selected = mattress
            mattresses.push({...mattress, quantity: 1})
            axios.put("/api/cart/1", {id: 1, mattresses})
        }
    }

    return (
        <div className={"product-details"}>
            <Header/>

            <div className={"product-details--wrap"}>
                <div className={"product-details--wrap--content"}>
                    <div className={"product-details--wrap--content--column-wrap"}>
                  <img className={"product-details--wrap--content--column-wrap--image"} src={mattress.image}/>
                           <div className={"product-details--wrap--content--column-wrap--product-details"}>Product Details</div>
                        <div className={"product-details--wrap--content--column-wrap--discription"}>{mattress.description}</div>

                    </div>
                    <div className={"product-details--wrap--content--details"}>
                        <div className={"product-details--wrap--content--details--hovag"}>HOVAG</div>
                        <div className={"product-details--wrap--content--details--rating"}>
                            <StarRate className={"product-details--wrap--content--details--rating--checked"} />
                            <StarRate className={"product-details--wrap--content--details--rating--checked"}/>
                            <StarRate className={"product-details--wrap--content--details--rating--checked"}/>
                            <StarBorderOutlined className={"product-details--wrap--content--details--rating--notchecked"}/>
                            <StarBorderOutlined className={"product-details--wrap--content--details--rating--notchecked"}/>
                        </div>
                        <div className={"product-details--wrap--content--details--price"}>₹ {mattress.price}</div>
                        <button className={"product-details--wrap--content--details--button"} onClick={addToCart}> Add to cart</button>
                        <hr className={"product-details--wrap--content--details--hr"}/>
                        <div className={"product-details--wrap--content--details--bedDetails"}>
                            <div className={"product-details--wrap--content--details--bedDetails--about"}>Bed size</div>
                        <div className={"product-details--wrap--content--details--bedDetails--about--details"}>{mattress.size}</div>

                        <div className={"product-details--wrap--content--details--bedDetails--about"}>Type </div>
                            <div className={"product-details--wrap--content--details--bedDetails--about--details"}>{mattress.type}</div>

                        <div className={"product-details--wrap--content--details--bedDetails--about"}>Height  </div>
                            <div className={"product-details--wrap--content--details--bedDetails--about--details"}>{mattress.height}</div>

                        <div className={"product-details--wrap--content--details--bedDetails--about"}>colour</div>
                            <div className={"product-details--wrap--content--details--bedDetails--about--details"}>{mattress.color}</div>

                            <div className={"product-details--wrap--content--details--bedDetails--about"}>layers  </div>
                                <div className={"product-details--wrap--content--details--bedDetails--about--details"}>{mattress.layers}</div>

                            <div className={"product-details--wrap--content--details--bedDetails--about"}>Comfort</div>
                                <div className={"product-details--wrap--content--details--bedDetails--about--details"}>{mattress.comfort}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ProductDetails