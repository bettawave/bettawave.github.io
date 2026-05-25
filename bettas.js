const fishes = [

  {
    name:"Red splnden male",
    price:"₹600-1000",
    image:"https://ibb.co/nqCj45jp"
  },
   {
    name:"Red splnden female",
    price:"₹450",
    image:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
  },

  {
    name:"OHM Betta",
    price:"₹100-300",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/76/Halfmoon_Betta.jpg"
  },

  {
    name:"Crowntail Betta",
    price:"₹200-350",
    image:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Crowntail_betta.jpg"
  }

];

let output = "";

fishes.forEach(fish => {

  output += `

    <div class="card">

      <img src="${fish.image}" class="fish-image">

      <h2>${fish.name}</h2>

      <p>${fish.price}</p>

    </div>

  `;

});

document.getElementById("fish-container").innerHTML = output;
