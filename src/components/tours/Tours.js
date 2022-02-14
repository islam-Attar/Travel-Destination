import "./Tours.css";
import Tour from "./tour/Tour";
import { Link } from "react-router-dom";
export default function Tours(props) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.data2.map((element) => {
        return (
          <Link id="textCard" to={`/city/${element.id}`}>
            <Tour key={element.id} dataCity={element} />
          </Link>
        );
      })}
    </div>
  );
}
