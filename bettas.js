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
      "https://i.ibb.co/sp1pjxHn/YS1.jpg",
      "https://i.ibb.co/hJyHN4vh/YS2.jpg"
    ]
  },
    {
    category:"Males",
    name:"Mahachai",
    price:"₹800",

    images:[
      "https://i.ibb.co/844QrNs2/BMAHA.jpg",
"https://i.ibb.co/XrwmyH7t/GMAHA1.jpg"
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
