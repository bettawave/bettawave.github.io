const ohmbettas = [

  {
    name: "Regular OHM Male",
    image: "https://i.ibb.co/60Qx8cpb/ohm1.jpg",
    price: "₹300 / piece",
    cartPrice: 300
  },

  {
    name: "Regular OHM Female",
    image: "https://i.ibb.co/fGP7kn9Y/ohm2.jpg",
    price: "₹150 / piece",
    cartPrice: 150
  },

  {
    name: "Candy OHM Male",
    image: "https://i.ibb.co/BHp1WVJp/ohm3.jpg",
    price: "₹500 / piece",
    cartPrice: 500
  },

  {
    name: "Candy OHM Female",
    image: "https://i.ibb.co/jZDd8BcT/cohm.jpg",
    price: "₹250 / piece",
    cartPrice: 250
  }

];

const container = document.getElementById("fishContainer");

let output = "";

ohmbettas.forEach(item => {

  output += `

    <div class="card">

      <img
        src="${item.image}"
        alt="${item.name}"
        class="fish-image"
      >

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

container.innerHTML = output;


// ADD TO CART

function addToCart(name, price) {

  let cart =
  JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert(name + " added to cart!");

}
