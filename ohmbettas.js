const ohmbettas = [

  {
    name: "Regular OHM Male",
    image: "https://i.ibb.co/bRRvBsrx/ohmmix.jpg",
    price: "₹150 / piece",
    cartPrice: 150
  },

  {
    name: "Regular OHM Female",
    image: "https://i.ibb.co/s9zfFfKW/femohm.jpg",
    price: "₹100 / piece",
    cartPrice: 100
  },

  {
    name: "Candy OHM Male",
    image: "https://i.ibb.co/mCzsVP9j/candymal.jpg",
    price: "₹250 / piece",
    cartPrice: 250
  },

  {
    name: "Candy OHM Female",
    image: "https://i.ibb.co/q3c75zjn/candyfem.jpg",
    price: "₹150 / piece",
    cartPrice: 150
  }

];

const container = document.getElementById("ohm-container");

ohmbettas.forEach(ohm => {

  container.innerHTML += `

    <div class="card">

      <img src="${ohm.image}" alt="${ohm.name}">

      <div class="card-content">

        <h2>${ohm.name}</h2>

        <p class="price">${ohm.price}</p>

        <button onclick="addToCart('${ohm.name}', ${ohm.cartPrice})">
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
