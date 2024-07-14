import { design } from "./ui.js";
import { fetchData } from "./data.js";
import { fetchDetilas } from "./details.js";

const links = document.querySelectorAll(".nav-item a");
const parentContainer = document.querySelector(".parent");
let sec = document.getElementById("sec-1");
let nav = document.querySelector(".navbar");
let loader = document.querySelector(".loader");

loader.classList.remove("d-none");
let cartaina = "";
setTimeout (function(){
  display("mmorpg");
loader.classList.add("d-none");
},1000)

links.forEach((link) => {
  link.addEventListener("click", async function (e) {
    links.forEach((contain) => {
      contain.classList.remove("active");
    });
    loader.classList.remove("d-none");

    e.target.classList.add("active");

    let categoryName = e.target.dataset.category;

    cartaina = "";
    display(categoryName);
    setTimeout(function(){loader.classList.add("d-none");},1000)
  });
});

async function display(cat) {
  let homeDataAPI = await fetchData.fetchHome(cat);
  homeDataAPI.map((item) => {
    cartaina += design.cardHome(item);
  });

  loader.classList.remove("d-none");
  parentContainer.innerHTML = cartaina;
  loader.classList.add("d-none");

  const card = document.querySelectorAll(".my-card");
  card.forEach((item) => {
    item.addEventListener("click", async function (e) {
      const id = item.dataset.id;
      console.log(id);
      loader.classList.remove("d-none");

      let data = await fetchDetilas.detailsData(id);
      let desDetils = design.detailesCard(data);
      document.querySelector(".details .container").innerHTML = desDetils;
      loader.classList.add("d-none");

      document.querySelector(".parent").classList.add("d-none");
      document.querySelector(".details").classList.remove("d-none");

      document.querySelector(".exit").addEventListener("click", function (e) {
        document.querySelector(".parent").classList.remove("d-none");
        document.querySelector(".details").classList.add("d-none");
      });
    });
  });
}

let height = sec.getBoundingClientRect();
window.addEventListener("scroll", function (e) {
  console.log(height.top);
  console.log(window.scrollY);
  if (window.scrollY > height.top) {
    nav.style.cssText = `
    z-index:999;
     width: 100%;
     position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

    `;
  } else {
    nav.style.cssText = `
    z-index:999;
    width: 100%;
    position: relative;
    top:0;

   `;
  }
});
