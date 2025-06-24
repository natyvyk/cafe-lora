import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    < Footer />
  </div>
);

/*
const navToggle = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.rollout-nav');

navToggle.addEventListener('click', () => {
mobileNav.classList.toggle('nav-closed');
});

mobileNav.addEventListener('click', () => {
mobileNav.classList.add('nav-closed');
})
*/

const hamburgerMenuButton = document.querySelector(".nav-btn");
const navigaceElm = document.querySelector(".rollout-nav");


hamburgerMenuButton.addEventListener("click", () => {
  navigaceElm.classList.toggle("nav-closed")
});

navigaceElm.addEventListener("click", () => {
  navigaceElm.classList.add("nav-closed")
});