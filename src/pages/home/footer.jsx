import './footer.scss'
export function Footer(){
    return(
        <div className={"footer"}>
        <div className={"footer--product"}>
            <h3 className={"footer--product--heading"}>Products</h3>
            <p className={"footer--product--subheading"}>Matresses<br/>Beds<br/>Accessories</p>
        </div>
    <div className={"footer--support"}>
        <h3 className={"footer--support--heading"}>Support</h3>
        <p className={"footer--support--subheading"}>Privacy & security<br/>Terms & condition<br/>Return Policy<br/>Warranty Policy</p>
    </div>
    <div className={"footer--copyright"}>
        <p className={"footer--copyright--subheading"}>Copyright @ 2021 matress store</p>
    </div>
        </div>
    )
}export default Footer