import "./style.css";


export const OrderItem = ({name, image}) => (
    <div className="order-item">
        <img className="order-item-image" src={`http://localhost:4000${image}`} />
        <p className="order-item-name">{name}</p>
    </div>
);