import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch("http://localhost:4000/api/drinks");
const json = await response.json();
console.log(json);
const data = json.data;
console.log(data);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={data} />
      <Gallery />
      <Contact />
    </main>
    < Footer />
  </div>
);


//Zprovozneni navigace
const hamburgerMenuButton = document.querySelector(".nav-btn");
const navigaceElm = document.querySelector(".rollout-nav");

hamburgerMenuButton.addEventListener("click", () => {
  navigaceElm.classList.toggle("nav-closed")
});

navigaceElm.addEventListener("click", () => {
  navigaceElm.classList.add("nav-closed")
});

