const snails = [

  {
    name: "Red Cherry Shrimp",
    image: "https://i.ibb.co/TD8KY1PZ/rcs1.jpg",
    price: "₹40 / piece",
    cartPrice: 40
  },

  {
    name: "Blue Dream Shrimp",
    image: "https://i.ibb.co/v4QqC1bJ/bds1.jpg",
    price: "₹60 / piece",
    cartPrice: 60
  },

  {
    name: "Yellow Shrimp",
    image: "https://i.ibb.co/kVxQ3p8y/ys1.jpg",
    price: "₹60 / piece",
    cartPrice: 60
  },

  {
    name: "Apple Snail",
    image: "https://i.ibb.co/1jnFZwW/apps1.jpg",
    price: "₹35 / piece",
    cartPrice: 35
  },

  {
    name: "Assassin Snail",
    image: "https://i.ibb.co/C3xWz98Y/assasin1.jpg",
    price: "₹60 / piece",
    cartPrice: 60
  },

  {
    name: "Spotted nerite Snail",
    image: "https://i.ibb.co/spV7TYVY/spotner.jpg",
    price: "₹150 / piece",
    cartPrice: 150
  }

];

const container = document.getElementById("snailContainer");

snails.forEach(item => {

  container.innerHTML += `

    <div class="card">

      <img src="${item.image}" alt="${item.name}">

      <div class="card-content">

        <h2>${item.name}</h2>

        <p class="price">${item.price}</p>

        <button onclick="addToCart('${item.name}', ${item.cartPrice})">
          Add to Cart
        </button>

      </div>

    </div>

  `;

});


// CART FUNCTION

function addToCart(name, price) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}
