import './cartview.scss'
import {useState} from "react";
export function Cartview({item}){

    const [quantity,setQuantity]=useState(0)
   function receivedNumber(event){
        const Quantity=event.target.value
       if(Quantity>=0){
           setQuantity(quantity)
           item.quantity = quantity
       }
   }
        return(
        <div className={"cartview"}>
            <div className={"cartview--wrapper"}>
                <div className={"cartview--wrapper--image"}>
                    <img className={"cartview--wrapper--image--item"} src={items.image}/>
                    <div className={"cartview--wrapper--image--product"}>
                        <div className={"cartview--wrapper--image--product--details"}>Comfort: {items.comfort}</div>
                        <div className={"cartview--wrapper--image--product--details"}>color: {items.color}</div>
                        <div className={"cartview--wrapper--image--product--details"}>Height: {items.height}</div>
                        <div className={"cartview--wrapper--image--product--details"}>Layers: {items.layers}</div>
                    </div>
                </div>
                <div className={"cartview--wrapper--details"}>
                    <div className={"cartview--wrapper--details--price"}>$ {items.price}</div>
                    <div className={"cartview--wrapper--details--overall"}>
                        <div className={"cartview--wrapper--details--overall--title"}>Qty</div>
                        <input type="number" value={quantity} onChange={receivedNumber} className={"cartview--wrapper--details--overall--enter"}/>
                    </div>
                    <button className={" "}>delete</button>
                </div>

            </div>

        </div>
    )
}