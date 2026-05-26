const fishes = [

  {
    name:"Black Samurai HMPK",

    pair:"₹1500-2500",
    male:"₹1000-1800",
    female:"₹500-800",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"Blue Samurai HMPK",

    pair:"₹1800-3000",
    male:"₹1200-2200",
    female:"₹600-900",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"Nemo Candy HMPK",

    pair:"₹1200-2200",
    male:"₹800-1600",
    female:"₹400-700",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"Tancho HMPK",

    pair:"₹1000-1800",
    male:"₹700-1400",
    female:"₹350-600",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"FCCP Red HMPK",

    pair:"₹1500-2500",
    male:"₹1000-1800",
    female:"₹500-800",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"FCCP Yellow HMPK",

    pair:"₹1500-2500",
    male:"₹1000-1800",
    female:"₹500-800",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"Hellboy Red HMPK",

    pair:"₹1200-2200",
    male:"₹800-1600",
    female:"₹400-700",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"Hellboy Yellow HMPK",

    pair:"₹1200-2200",
    male:"₹800-1600",
    female:"₹400-700",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"Galaxy Koi HMPK",

    pair:"₹1500-3000",
    male:"₹1000-2200",
    female:"₹500-900",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"Avatar Nemo HMPK",

    pair:"₹1800-3500",
    male:"₹1200-2500",
    female:"₹600-1000",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    name:"Mustard Gas HMPK",

    pair:"₹1200-2200",
    male:"₹800-1600",
    female:"₹400-700",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
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

        <p><b>Male:</b> ${fish.male}</p>

        <p><b>Female:</b> ${fish.female}</p>

      </div>

    </div>

  `;

});

document.getElementById("plakat-container").innerHTML = output;
