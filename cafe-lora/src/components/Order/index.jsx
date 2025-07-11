import "./style.css";
import { OrderItem } from "../OrderItem";

export const Order = ({items}) => {
    if (items.length === 0) {
        return (
            <main className="order">
                <div className="container order__content">
                    <h1>Vaše objednávka</h1>
                    <p className="empty-order">Zatím nemáte nic objednáno</p>
                </div>
            </main>
        )
    }
    else return (
        <main className="order">
            <div className="container order__content">
                <h1>Vaše objednávka</h1>
                <div className="order__items">
                    {items.map((item) => (
                        <OrderItem key={item.id} name={item.name} image={item.image} />
                ))}
                </div>
            </div>
        </main>
);
};