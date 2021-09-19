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
                    <img className={"cartview--wrapper--image--item"} src={item.image}/>
                    <div className={"cartview--wrapper--image--product"}>
                        <div className={"cartview--wrapper--image--product--details"}>Comfort: {item.comfort}</div>
                        <div className={"cartview--wrapper--image--product--details"}>color: {item.color}</div>
                        <div className={"cartview--wrapper--image--product--details"}>Height: {item.height}</div>
                        <div className={"cartview--wrapper--image--product--details"}>Layers: {item.layers}</div>
                    </div>
                </div>
                <div className={"cartview--wrapper--details"}>
                    <div className={"cartview--wrapper--details--price"}>$ {item.price}</div>
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