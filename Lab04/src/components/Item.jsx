
const Item = ({item}) => {
    return (
        <div className="card">
        <img
            src={item.img}
            className="card-img-top"
            alt={item.name}
            style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Time: {item.minutes}</p>
        </div>
    </div>
    );
}

export default Item;