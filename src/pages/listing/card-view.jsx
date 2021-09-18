import './card-view.scss'
import {Link} from "react-router-dom";
export function CardView({mattress}){

    return(
        <div className="card-view">
            <Link to={`/mattress/${mattress.id}`}>
                <div className="card-view--image">
                    <img className="card-view--image--img" src={mattress.image}/>
                </div>
                <div className="card-view--details">
                    <div className="card-view--details--header">Mattress-Store</div>
                    <div className="card-view--details--type">_{mattress.type}</div>
                    <div className="card-view--details--comfort">_{mattress.comfort}</div>
                </div>
                <div className="card-view--price">{mattress.price}$</div>
            </Link>
        </div>
    )
}
export default CardView