import './cart.scss'
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Cartview} from "./cartview";
import {Clear, Delete} from "@material-ui/icons";
import Home from "../home/home";

let count = 0;

function Cart({location}) {

    console.log("Cart rendering", ++count)

    const [cart,setCart]=useState({mattresses:[]})
    const [counter,setcounter]=useState(1)
    const url="/api/cart/1"

    function loadCart() {
        console.log("Get cart")
        axios.get(url)
            .then(function (response) {
            setCart(response.data)
            console.log(response.data)
        })
    }
    useEffect(loadCart,[location])
    function deleteItem(item){
        let { mattresses } = cart;
        const index =  mattresses.filter((product)=> product.id === item.id) //to find the index
            mattresses.splice(index,1)
            setCart({...cart,mattresses})
            axios.put(url,cart)
    }
    function increment(mattress){
        mattress.quantity++
        let { mattresses } = cart;
        const index = mattresses.findIndex(item => item.id === mattress.id)
        mattresses.splice(index, 1, mattress)
        setCart({...cart, mattresses })
        axios.put(url, cart)
    }
    function decrement(mattress){
        mattress.quantity--
        let { mattresses } = cart;
        const index = mattresses.findIndex(item => item.id === mattress.id)
        mattresses.splice(index, 1)
    }
    const total = cart.mattresses.length > 0 && cart.mattresses.map(m => m.price * m.quantity).reduce((sum, price) => sum + price)
    return(
        <div className={"cartpage"}>
            <div className={"cartpage--home"}>
                <Home/>
            </div>
            <div className="cartpage--cart">
                <div className={"cartpage--cart--head"}>
                    <div className={"cartpage--cart--head--heading"}>Cart</div>
                    <Link className={"cartpage--cart--head--clearlink"} to={"/mattress/cart-view"}>
                    <Clear className={"cartpage--cart--head--clearlink--clear"}/>
                    </Link>
                </div>
                {cart.mattresses.map((item)=>
                <div className={"cartpage--cart--details"}>
                    <img className={"cartpage--cart--details--image"} src={item.image}/>
                    <div className={"cartpage--cart--details--about"}>
                        <div className={"cartpage--cart--details--about--hovag"}>HOVAG</div>
                        <div className={"cartpage--cart--details--about--type"}>{item.type},{item.comfort}</div>
                        <div className={"cartpage--cart--details--about--price"}>₹ {item.price}</div>
                    </div>
                    <div className={"cartpage--cart--details--edit"}>
                        <div className={"cartpage--cart--details--edit--price"}>₹ {item.price}</div>
                        <div className={"cartpage--cart--details--edit--quantity"}>
                            <button className={"cartpage--cart--details--edit--quantity--subtration"} onClick={()=>decrement(item)}>-</button>
                            <div className={"cartpage--cart--details--edit--quantity--number"}>{item.quantity}</div>
                            <button className={"cartpage--cart--details--edit--quantity--addition"} onClick={()=>increment(item)}>+</button>
                        </div>
                        <Delete className={"cartpage--cart--details--edit--delete"} onClick={()=>deleteItem(item)} />
                    </div>
                </div> )}
                <div className={"cartpage--cart--totalwrap"}>
                    <div className={"cartpage--cart--totalwrap--total"}>
                        <div className={"cartpage--cart--totalwrap--total--heading"}>Total</div>
                        <div className={"cartpage--cart--totalwrap--total--amount"}>₹ {total} </div>
                    </div>
                    <button className={"cartpage--cart--totalwrap--checkout"}>Check out</button>
                </div>
            </div>
        </div>
        // <div className={"cart"}>
        //     <div className={"cart--heading"}>CART</div>
        //     <div className={"cart--wrapper"}>
        //         <div className={"cart--wrapper--content"}>
        //             <div className={"cart--wrapper--content--heading"}>
        //                 <div className={"cart--wrapper--content--heading--title"}>Product</div>
        //                 <div className={"cart--wrapper--content--heading--title"}>Price</div>
        //                 <div className={"cart--wrapper--content--heading--title"}>Quantity</div>
        //                 <div className={"cart--wrapper--content--heading--title"}>total</div>
        //             </div>
        //             <div cart--wrapper--content--details>
        //             {cart.mattresses.map(item=><Cartview mattress={item}/>)}
        //             </div>
        //         </div>
        //         <div className={"cart--wrapper--payment"}>
        //             <div>{totalamount}</div>
        //             <button className={"cart--wrapper--payment--button"} >PLACE ORDER</button>
        //         </div>
        //     </div>
        //
        // </div>
    )
}
export default Cart