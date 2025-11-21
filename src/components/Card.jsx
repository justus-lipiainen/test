function Card(props) {
    return (
        <div className="card">
            <h2>{props.Date}</h2>
            <p>{props.Food}</p>
        </div>
    );    
}

export default Card;