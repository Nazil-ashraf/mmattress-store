import './product-details.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ProductDetails = () => {
    const [mattress,setMattress]=useState({})
    const [quantity,setQuantity]=useState()
    const {id} = useParams()

    useEffect(()=>{
        axios.get("/api/mattresses/"+id)
            .then(response=>{setMattress(response.data)})
        }
        , [])

    function readQty(event) {
        const value = event.target.value
        if (value >= 0) {
            console.log(value)
            setQuantity(value)
        }
    }
    function addToCart(){
        axios.post("/api/cart",{mattresses:[mattress]})
    }
    return (
        <div className="product-details">
            <div>
                <img src={mattress.image}/>
            </div>
            <div>
                <div>Mattress-Store</div>
                <div>{mattress.type}</div>
                <div>{mattress.comfort}</div>
                <div>{mattress.size}</div>
            </div>
            <div>
                <label>Qty</label>
                <input  type="number" onChange={readQty} value={quantity}/>
            </div>
            <div>
                <div>{mattress.color}</div>
                <div>{mattress.height}</div>
                <div>{mattress.layers}</div>
            </div>
            <div>{mattress.price}</div>
            <div>
                <button onClick={addToCart}>Add</button>
            </div>
        </div>
    )
}

export default ProductDetails