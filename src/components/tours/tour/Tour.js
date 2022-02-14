import "./Tour.css"


export default function Tour(props) {
     
    return (
       
       
            <div key={props.dataCity.id} className="tour" style={{}} >
                <h1 style={{}}>{props.dataCity.name}</h1>
                <img style={{ width: "370px", height: "310px" }} src={props.dataCity.image} alt={props.dataCity.name} />

            </div>
       
    )
}

