const fishes = [

  {
    category:"Males",
    name:"Red Splenden Male",
    price:"₹600-1000",
    image:"https://i.ibb.co/0ptr1dr5/red-splenden.png"
  },

  {
    category:"Males",
    name:"OHM Betta",
    price:"₹100-300",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/76/Halfmoon_Betta.jpg"
  },

  {
    category:"Males",
    name:"Crowntail Betta",
    price:"₹200-350",
    image:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Crowntail_betta.jpg"
  },

  {
    category:"Females",
    name:"Red Splenden Female",
    price:"₹450",
    image:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
  }

];

let maleOutput = "";
let femaleOutput = "";

fishes.forEach(fish => {

  const card = `

    <div class="card">

      <img src="${fish.image}" class="fish-image">

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
