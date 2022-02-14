import './Tour.css';
export default function Tour(props) {
  return (
    <div className="tourDiv"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      {props.data2.map((element) => {
        return (
          <div className="elementsDiv"
            key={element.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "5px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "15%",
            }}
          >
            <h1 style={{}}>{element.name}</h1>
            <img
              style={{ width: "370px", height: "400px" }}
              src={element.image}
              alt={element.name}
            />
          </div>
        );
      })}
    </div>
  );
}
