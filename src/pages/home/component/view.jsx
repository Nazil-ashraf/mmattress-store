import './view.scss'
import {Link} from "react-router-dom";
export function View({item}){
    return(
        <div className="view">
            <Link to={`/mattress/${item}`}>
                <div className="card-view--image">
                    <img className="card-view--image--img" src={item.image}/>
                </div>
                <div className="card-view--details">
                    <div className="card-view--details--header">MATRESS TYPE:</div>
                    <div className="card-view--details--type">_{item.type}</div>
                    <div className="card-view--details--comfort">_{item.comfort}</div>
                </div>
                <div className="card-view--price">{item.price}$</div>
            </Link>
        </div>
    )
}