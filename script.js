const categories = document.querySelectorAll("#categories .item");

console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("ul li").length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemCount}`);
});

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientItems = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});

ingredientsList.append(...ingredientItems);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");
const galleryMarkup = images
  .map(
    ({ url, alt }) => `
      <li class="gallery__item">
        <img class="gallery__image" src="${url}" alt="${alt}" />
      </li>
    `,
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

let counterValue = 0;
const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

counter.addEventListener("click", event => {
  if (event.target.dataset.action === "increment") {
    increment();
  }

  if (event.target.dataset.action === "decrement") {
    decrement();
  }
});
