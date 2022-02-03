import './card-view.scss';
import {Link} from "react-router-dom";
import {Star, StarBorderOutlined, StarRate} from "@material-ui/icons";



export function CardView({mattress}){

    return(
        <div className="card-view">
            <Link to={`/mattresses/${mattress.id}`}>
                <div className="card-view--image">
                    <img className="card-view--image--img" src={mattress.image}/>

                </div>
            </Link>
                <div className="card-view--details">
                    <div className="card-view--details--header">HOVAG</div>
                    <div className="card-view--details--type">{mattress.type} ,{mattress.comfort}</div>
                    <div className="card-view--details--price">₹ {mattress.price}</div>
                    <div className={"card-view--details--rating"}>
                    <StarRate className={"card-view--details--rating--checked"} />
                    <StarRate className={"card-view--details--rating--checked"}/>
                    <StarRate className={"card-view--details--rating--checked"}/>
                    <StarBorderOutlined className={"card-view--details--rating--notchecked"}/>
                    <StarBorderOutlined className={"card-view--details--rating--notchecked"}/>
                </div>

                </div>

        </div>
    )
}
export default CardView