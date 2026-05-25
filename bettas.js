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
    name:"Yellow Splenden",
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
      "https://i.ibb.co/4LShVsH/maha1.jpg",
      "https://i.ibb.co/TB2jgfZq/maha2.jpg"
    ]
  },
  {
    category:"Males",
    name:"Alien male",
    price:"₹800",

    images:[
      "https://i.ibb.co/84NMvK9Q/al1.jpg",
"https://i.ibb.co/dJ3PRnXG/al2.jpg",
"https://i.ibb.co/JWMTdWqx/al3.jpg"
    ]
  },
  {
    category:"Males",
    name:"Imbellis male",
    price:"₹600-1000",

    images:[
      "https://i.ibb.co/chx3JzBG/imb1.jpg",
"https://i.ibb.co/Hf5R67Sp/imb2.jpg"
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

      <img 
        src="${img}" 
        class="fish-image"
        onerror="this.style.display='none'"
      >

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

  } else {

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
