const fishes = [

  {
    name:"Black and Blue Samurai HMPK",

    pair:"₹500-700",
    male:"₹350-550",
    female:"₹250",

    pairPrice:700,
    malePrice:550,
    femalePrice:250,

    images:[
      "https://i.ibb.co/cSStdDvT/sam1.jpg",
      "https://i.ibb.co/SDBy56jM/sam2.jpg"
    ]
  },

  {
    name:"Nemo Candy HMPK",

    pair:"₹400-1500",
    male:"₹250-1300",
    female:"₹120-400",

    pairPrice:1500,
    malePrice:1300,
    femalePrice:400,

    images:[
      "https://i.ibb.co/spR16phC/nc1.jpg",
      "https://i.ibb.co/xSW15F5J/nc2.jpg"
    ]
  },

  {
    name:"Tancho HMPK",

    pair:"₹1500-2000",
    male:"₹1200-1400",
    female:"₹500-600",

    pairPrice:2000,
    malePrice:1400,
    femalePrice:600,

    images:[
      "https://i.ibb.co/7Jb9X1qF/tan1.jpg",
      "https://i.ibb.co/tpkbYqt1/tan2.jpg"
    ]
  },

  {
    name:"Full Gold HMPK",

    pair:"₹1200",
    male:"₹1000",
    female:"₹500",

    pairPrice:1200,
    malePrice:1000,
    femalePrice:500,

    images:[
      "https://i.ibb.co/LXj8d8pd/gold1.jpg",
      "https://i.ibb.co/VWG94W9m/gold2.jpg"
    ]
  },

  {
    name:"FCCP Red HMPK",

    pair:"₹650-1600",
    male:"₹500-1300",
    female:"₹400-600",

    pairPrice:1600,
    malePrice:1300,
    femalePrice:600,

    images:[
      "https://i.ibb.co/Ngxx23nb/fccp1.jpg"
    ]
  },

  {
    name:"FCCP Yellow HMPK",

    pair:"₹750-1700",
    male:"₹600-1400",
    female:"₹500-800",

    pairPrice:1700,
    malePrice:1400,
    femalePrice:800,

    images:[
      "https://i.ibb.co/kVKLL0b2/yfccp1.jpg",
      "https://i.ibb.co/LzvSqKy6/yfccp2.jpg"
    ]
  },

  {
    name:"Hellboy Red HMPK",

    pair:"₹1200-2200",
    male:"₹500-1300",
    female:"₹400-700",

    pairPrice:2200,
    malePrice:1300,
    femalePrice:700,

    images:[
      "https://i.ibb.co/3mxJCTvV/rhell1.jpg"
    ]
  },

  {
    name:"Hellboy Yellow HMPK",

    pair:"₹1200-2200",
    male:"₹500-1300",
    female:"₹400-700",

    pairPrice:2200,
    malePrice:1300,
    femalePrice:700,

    images:[
      "https://i.ibb.co/bjxFbNqC/yhell1.jpg"
    ]
  },

  {
    name:"Galaxy Koi HMPK",

    pair:"₹500-2000",
    male:"₹300-1800",
    female:"₹120-650",

    pairPrice:2000,
    malePrice:1800,
    femalePrice:650,

    images:[
      "https://i.ibb.co/My96sNxr/gal1.jpg",
      "https://i.ibb.co/V0gTqpBX/gal2.jpg",
      "https://i.ibb.co/nNxj0y9P/gal3.jpg"
    ]
  },

  {
    name:"Avatar HMPK",

    pair:"₹650-3500",
    male:"₹550-3000",
    female:"₹250-1000",

    pairPrice:3500,
    malePrice:3000,
    femalePrice:1000,

    images:[
      "https://i.ibb.co/JRbjW3nc/av1.jpg"
    ]
  },

  {
    name:"Mustard Gas HMPK",

    pair:"₹550-1000",
    male:"₹350-750",
    female:"₹250-450",

    pairPrice:1000,
    malePrice:750,
    femalePrice:450,

    images:[
      "https://i.ibb.co/cKgPsgLK/mg1.jpg"
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

document.getElementById("plakat-container").innerHTML = output;


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
