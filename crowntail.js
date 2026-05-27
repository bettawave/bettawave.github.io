const fishes = [

  {
    name: "Crowntail Betta",

    pair: "₹400-700",
    male: "₹250-500",
    female: "₹150-250",

    // Cart Prices
    pairPrice: 700,
    malePrice: 500,
    femalePrice: 250,

    images: [
      "https://i.ibb.co/ycpRX2Zd/ct1.jpg",
      "https://i.ibb.co/fYnFr3r2/ct2.jpg",
      "https://i.ibb.co/93TPkZVp/ct3.jpg",
      "https://i.ibb.co/39m6yp0q/ct5.jpg",
    ]
  }

];

let output = "";

fishes.forEach(fish => {

  let imageHTML = "";

  fish.images.forEach(img => {

    imageHTML += `
      <img src="${img}" class="fish-image">
    `;

  });

  output += `

    <div class="card">

      <div class="image-grid">

        ${imageHTML}

      </div>

      <h2>${fish.name}</h2>

      <div class="price-box">

        <p><b>Pair:</b> ${fish.pair}</p>

        <button onclick="addToCart('${fish.name} Pair', ${fish.pairPrice})">
          Add Pair to Cart
        </button>

        <p><b>Male:</b> ${fish.male}</p>

        <button onclick="addToCart('${fish.name} Male', ${fish.malePrice})">
          Add Male to Cart
        </button>

        <p><b>Female:</b> ${fish.female}</p>

        <button onclick="addToCart('${fish.name} Female', ${fish.femalePrice})">
          Add Female to Cart
        </button>

      </div>

    </div>

  `;

});

document.getElementById("crowntail-container").innerHTML = output;


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
