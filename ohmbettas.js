const fishes = [

  {
    id:"ohmbetta",

    name:" Regular OHM Betta",

    male:"₹150",
    female:"₹100",

    // Cart Prices
    malePrice:150,
    femalePrice:100,
    name:"Candy OHM",
    male:"₹250",
    female:"₹150"
      
    // Cart Prices
    malePrice:250,
    femalePrice:150,
    images:[
      "https://i.ibb.co/fGP7kn9Y/ohm2.jpg",
      "https://i.ibb.co/BHp1WVJp/ohm3.jpg",
      "https://i.ibb.co/LmM78FH/ohm4.jpg",
      "https://i.ibb.co/jZDd8BcT/cohm.jpg"
    ]
  }

];

let output = "";

fishes.forEach(fish => {

  let imageHTML = "";

  fish.images.forEach(img => {

    imageHTML += `

      <img
        src="${img}"
        class="fish-image"
        onerror="this.style.display='none'"
      >

    `;

  });

  output += `

    <div class="card" id="${fish.id}">

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

document.getElementById("ohm-container").innerHTML = output;


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
