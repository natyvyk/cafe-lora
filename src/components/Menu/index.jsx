import "./style.css";
import { Drink } from "../Drink";

export const Menu = () => (
    <section id="menu" className="menu">
    <div className="container">
      <h2>Naše nabídka</h2>
      <p className="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div className="drinks-list">
        <Drink name="Espresso" image="https://baristaroyal.de/cdn/shop/articles/caffe-doppio-152331.jpg?v=1719300694&width=1500"/>

      </div>

      <div className="order-detail">
        <a href="/order.html">Detail objednávky</a>
      </div>
    </div>
    </section>
);