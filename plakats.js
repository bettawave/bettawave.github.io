const fishes = [

  {
    name:"Black and blue Samurai HMPK",

    pair:"₹500-700",
    male:"₹350-550",
    female:"₹250",

    images:[
      "https://i.ibb.co/cSStdDvT/sam1.jpg",
"https://i.ibb.co/SDBy56jM/sam2.jpg"
    ]
  },

  {
    name:"Nemo Candy HMPK",

    pair:"₹1200-2200",
    male:"₹800-1600",
    female:"₹400-700",

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

    images:[
      "https://i.ibb.co/7Jb9X1qF/tan1.jpg",
"https://i.ibb.co/tpkbYqt1/tan2.jpg"
    ]
  },

  {
    name:"Full GOld HMPK",

    pair:"₹1200",
    male:"₹1000",
    female:"₹500",

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

    images:[
      "https://i.ibb.co/Ngxx23nb/fccp1.jpg"
    ]
  },

  {
    name:"FCCP Yellow HMPK",

    pair:"₹750-1700",
    male:"₹600-1400",
    female:"₹500-800",

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

    images:[
"https://i.ibb.co/3mxJCTvV/rhell1.jpg"
    ]
  },

  {
    name:"Hellboy Yellow HMPK",

    pair:"₹1200-2200",
    male:"₹500-1300",
    female:"₹400-700",

    images:[
"https://i.ibb.co/bjxFbNqC/yhell1.jpg" 
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
