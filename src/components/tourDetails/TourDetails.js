import "./TourDetails.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TourDetails(props) {
  const [showMore, setShowMore] = useState(false);
  let { id } = useParams();
  let dataFilter = props.data.filter((element) => element.id == id);
  return (
    <div>
      <Header />
      <div className="tourD">
        <div className="box1">
          <p>{`ID: ${dataFilter[0].id}`}</p>
          <h3>{dataFilter[0].name}</h3>
          <img
            src={dataFilter[0].image}
            style={{ width: "400px", height: "400px", borderRadius: "15px" }}
          />
        </div>
        <div className="box2">
          <h4
            style={{ margin: "0 0 10px 0" }}
          >{`Price: ${dataFilter[0].price}`}</h4>
          <p>
            {showMore
              ? dataFilter[0].info
              : `${dataFilter[0].info.substring(0, 250)}......`}
            <button
              className="btn"
              onClick={() => setShowMore(!showMore)}
              style={{ backgroundColor: "#193498", color: "wheat" }}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
