import './cart.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {Cartview} from "./cartview";

export function Cart(){
    const [cart,setCart]=useState({mattresses:[]})
    const url="/api/cart/1"
function selectedItem() {
    axios.get(url)
        .then(function (response) {
            setCart(response.data)
            console.log(response.data)

        })
}
useEffect(selectedItem,[])
const amount =cart.mattresses.map((num)=>num.price)
    const totalamount=amount.reduce((previousValue,currentvalue)=>previousValue+currentvalue,0)
    console.log(amount)



    return(
        <div className={"cart"}>
            <div className={"cart--heading"}>CART</div>
            <div className={"cart--wrapper"}>
                <div className={"cart--wrapper--content"}>
                    <div className={"cart--wrapper--content--heading"}>
                        <div className={"cart--wrapper--content--heading--title"}>Product</div>
                        <div className={"cart--wrapper--content--heading--title"}>Price</div>
                        <div className={"cart--wrapper--content--heading--title"}>Quantity</div>
                        <div className={"cart--wrapper--content--heading--title"}>total</div>
                    </div>
                    <div cart--wrapper--content--details>
                    {cart.mattresses.map(items=><Cartview items={items}/>)}
                    </div>
                </div>
                <div className={"cart--wrapper--payment"}>
                    <div>{totalamount}</div>
                    <button className={"cart--wrapper--payment--button"} >PLACE ORDER</button>
                </div>
            </div>

        </div>
    )
}
export default Cart