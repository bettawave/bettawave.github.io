const fishes = [

  {
    category:"Males",
    name:"Red Splenden Male",
    price:"₹600-1000",

    images:[
      "https://i.ibb.co/JwQ0TdJF/benjo.jpg",
      "https://i.ibb.co/SwzHMvNf/red-splenden.jpg"
    ]
  },

  {
    category:"Males",
    name:"Yellow splenden",
    price:"₹800",

    images:[
      "https://i.ibb.co/kV1qRXQH/Screenshot-2026-05-25-151905.jpg",
"https://i.ibb.co/SXQJ3qL4/spadetail.jpg"
    ]
  },

  {
    category:"Males",
    name:"Crowntail Betta",
    price:"₹200-350",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Crowntail_betta.jpg"
    ]
  },

  {
    category:"Females",
    name:"Red Splenden Female",
    price:"₹450",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  }

];

let maleOutput = "";
let femaleOutput = "";

fishes.forEach(fish => {

  let imageHTML = "";

  fish.images.forEach(img => {

    imageHTML += `
      <img src="${img}" class="fish-image">
    `;

  });

  const card = `

    <div class="card">

      <div class="image-grid">

        ${imageHTML}

      </div>

      <h2>${fish.name}</h2>

      <p class="price">${fish.price}</p>

    </div>

  `;

  if(fish.category === "Females"){
    femaleOutput += card;
  }
  else{
    maleOutput += card;
  }

});

document.getElementById("fish-container").innerHTML = `

  <h1 class="section-title">Male Bettas</h1>

  <div class="container">
    ${maleOutput}
  </div>

  <h1 class="section-title">Female Bettas</h1>

  <div class="container">
    ${femaleOutput}
  </div>

`;
