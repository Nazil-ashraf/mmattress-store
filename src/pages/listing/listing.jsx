import './listing.scss'

import {useEffect, useState} from "react";
import axios from "axios";
import CardView from "./card-view";
function Listing() {

    const [mattresses, setMattresses] = useState([])

    useEffect(() => {
        axios.get("/api/mattresses")
            .then(response => setMattresses(response.data))
    }, [])

    return(
        <div>
            <div className="listing">
                 {mattresses.map(mattress=><CardView mattress={mattress}/>)}
             </div>
        </div>
    )

}

export default Listing