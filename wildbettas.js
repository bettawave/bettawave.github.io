const fishes = [

  {
    name:"Red Splenden",

    pair:"₹1000-1500",
    male:"₹600-1000",
    female:"₹450",

    pairPrice:1500,
    malePrice:1000,
    femalePrice:450,

    images:[
      "https://i.ibb.co/JwQ0TdJF/benjo.jpg",
      "https://i.ibb.co/SwzHMvNf/red-splenden.jpg"
    ]
  },

  {
    name:"Yellow Splenden",

    pair:"₹1200",
    male:"₹800",
    female:"₹450",

    pairPrice:1200,
    malePrice:800,
    femalePrice:450,

    images:[
      "https://i.ibb.co/sp1pjxHn/YS1.jpg",
      "https://i.ibb.co/hJyHN4vh/YS2.jpg"
    ]
  },

  {
    name:"Mahachai",

    pair:"₹1000-2000",
    male:"₹800-1600",
    female:"₹450",

    pairPrice:2000,
    malePrice:1600,
    femalePrice:450,

    images:[
      "https://i.ibb.co/4LShVsH/maha1.jpg",
      "https://i.ibb.co/TB2jgfZq/maha2.jpg"
    ]
  },

  {
    name:"Imbellis",

    pair:"₹1000-2000",
    male:"₹800-1600",
    female:"₹450",

    pairPrice:2000,
    malePrice:1600,
    femalePrice:450,

    images:[
      "https://i.ibb.co/4wTYLSXK/imb1.jpg",
      "https://i.ibb.co/67XbkXnP/imb2.jpg"
    ]
  },

  {
    name:"Alien",

    pair:"₹1000-1500",
    male:"₹600-1000",
    female:"₹450",

    pairPrice:1500,
    malePrice:1000,
    femalePrice:450,

    images:[
      "https://i.ibb.co/j9f3Kfsb/al1.jpg",
      "https://i.ibb.co/jj7kWBF/al2.jpg",
      "https://i.ibb.co/JjTvvDFW/al3.jpg"
    ]
  },

  {
    name:"Smaragdina Guitar",

    pair:"₹1500-2000",
    male:"₹1100-1700",
    female:"₹450",

    pairPrice:2000,
    malePrice:1700,
    femalePrice:450,

    images:[
      "https://i.ibb.co/0pJZHrRy/sg1.jpg",
      "https://i.ibb.co/JjxbrFJR/sg2.jpg",
      "https://i.ibb.co/PGLrZVCB/sg3.jpg"
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

document.getElementById("wild-container").innerHTML = output;


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
