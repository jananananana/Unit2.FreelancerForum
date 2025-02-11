
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
  { name: "Dr. Cool", price: 85, occupation: "cook" },
  { name: "Ms. Anthropy", price: 33, occupation: "professional friend" }
];

const shownFreelancersPrices = [];

/** Adds a freelancer to the list of freelancers. */
function addFreelancer() {  
  // Get a random number between 0 and the number of freelancers
  const randomIndex = Math.floor(Math.random() * freelancers.length);
  let randomFreelancer = freelancers.splice(randomIndex, 1)[0];

  render(randomFreelancer);
}

function calculateAndRenderAveragePrice(prices) {
  // get average of the prices
  let totalPrices = prices.reduce((acc, price) => acc + price, 0);
  let average = totalPrices / prices.length;
  
  const averagePrice = document.querySelector("#average-price");

  averagePrice.textContent = average;

}

// Render the freelancers
function render(person) {

  const freelancerUl = document.querySelector("#freelance-list");
  const template = document.querySelector("#freelancer");
  const clone = template.content.cloneNode(true);

  let h2 = clone.querySelector("h2");
  let p = clone.querySelectorAll("p");

  if (person) {
    shownFreelancersPrices.push(person.price);
    h2.textContent = person.name;
    p[0].textContent = person.occupation;
    p[1].textContent = `Price: $${person.price}`;
  }

  freelancerUl.appendChild(clone);
  calculateAndRenderAveragePrice(shownFreelancersPrices);
}


const addFreelancerInterval = setInterval(() => {
  addFreelancer();

  // stop adding freelancers if we have reached the max
  if (freelancers.length === 0) {
    clearInterval(addFreelancerInterval);
  }
}, 1000);

const p1 = { name: "Dr. Datefinder", price: 15, occupation: "matchmaker" };
const p2 = { name: "Mrs. Peace-Peas", price: 33, occupation: "cook" };

render(p1);
render(p2);
