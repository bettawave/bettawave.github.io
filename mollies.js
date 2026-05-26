const mollies = [

  {
    name: "Red Balloon Molly Local",
    image: "https://i.ibb.co/KczxpzXS/rbm1.jpg",
    price: "₹80 / Pair"
  },

  {
    name: "Mix Balloon Molly Local",
    image: "https://i.ibb.co/1tsSDH2M/mbm1.jpg",
    price: "₹100 / Pair"
  },

  {
    name: "Moon Tail Platinum White Exotic Balloon",
    image: "https://i.ibb.co/9HF291ZJ/beem1.jpg",
    price: "₹500-1500 / Pair"
  },

  {
    name: "Moon Tail Exotic Zebra Balloon",
    image: "https://i.ibb.co/LzsjTBQN/mtzbm1.jpg",
    price: "₹600-1500 / Pair"
  },

  {
    name: "Moon Tail Golden Exotic Balloon",
    image: "https://i.ibb.co/qvGh6wJ/gbm1.jpg",
    price: "₹600-1500 / Pair"
  }

];

const container = document.getElementById("mollyContainer");

mollies.forEach(molly => {

  container.innerHTML += `

    <div class="card">

      <img src="${molly.image}" alt="${molly.name}">

      <div class="card-content">
        <h2>${molly.name}</h2>
        <p class="price">${molly.price}</p>
      </div>

    </div>

  `;

});
