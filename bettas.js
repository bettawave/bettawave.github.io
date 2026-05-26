const fishes = [

  {
    section:"Wild Bettas",

    name:"Red Splenden",

    pair:"₹1000-1500",
    male:"₹600-1000",
    female:"₹450",

    images:[
      "https://i.ibb.co/JwQ0TdJF/benjo.jpg",
      "https://i.ibb.co/SwzHMvNf/red-splenden.jpg"
    ]
  },

  {
    section:"Wild Bettas",

    name:"Yellow Splenden",

    pair:"₹1200",
    male:"₹800",
    female:"₹450",

    images:[
      "https://i.ibb.co/sp1pjxHn/YS1.jpg",
      "https://i.ibb.co/hJyHN4vh/YS2.jpg"
    ]
  },

  {
    section:"Wild Bettas",

    name:"Mahachai",

    pair:"₹1200",
    male:"₹800",
    female:"₹450",

    images:[
      "https://i.ibb.co/4LShVsH/maha1.jpg",
      "https://i.ibb.co/TB2jgfZq/maha2.jpg"
    ]
  },

  {
    section:"Wild Bettas",

    name:"Alien Betta",

    pair:"₹1000-1200",
    male:"₹800",
    female:"₹450",

    images:[
      "https://i.ibb.co/84NMvK9Q/al1.jpg",
      "https://i.ibb.co/dJ3PRnXG/al2.jpg",
      "https://i.ibb.co/JWMTdWqx/al3.jpg"
    ]
  },

  {
    section:"Wild Bettas",

    name:"Imbellis",

    pair:"₹1000-1500",
    male:"₹600-1000",
    female:"₹450",

    images:[
      "https://i.ibb.co/chx3JzBG/imb1.jpg",
      "https://i.ibb.co/Hf5R67Sp/imb2.jpg"
    ]
  },

  {
    section:"Wild Bettas",

    name:"Smaragdina Guitar",

    pair:"₹1800-2200",
    male:"₹1500",
    female:"₹450",

    images:[
      "https://i.ibb.co/d0px4Ynx/sg1.jpg",
      "https://i.ibb.co/KzfQMBd7/sg2.jpg",
      "https://i.ibb.co/23vdYNWz/sg3.jpg"
    ]
  },

  {
    section:"OHM Bettas",

    name:"OHM Betta",

    pair:"₹250-500",
    male:"₹150-300",
    female:"₹80-150",

    images:[
      "https://i.ibb.co/60Qx8cpb/ohm1.jpg",
"https://i.ibb.co/fGP7kn9Y/ohm2.jpg",
"https://i.ibb.co/BHp1WVJp/ohm3.jpg",
"https://i.ibb.co/LmM78FH/ohm4.jpg",
      "https://i.ibb.co/jZDd8BcT/cohm.jpg"
    ]
  },

  {
    section:"Dumbo ear OHMs",

    name:"Dumbo ear OHM",

    pair:"₹500",
    male:"₹350",

    images:[
      "https://i.ibb.co/r205DHb9/DOHM.jpg",
  "https://i.ibb.co/GQNJqVFZ/dohmw.jpg"
    ]
  },

  {
    section:"Plakats",

    name:"HMPK Betta",

    pair:"₹500 onwards",
    male:"₹200 onwards",
    female:"₹200",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  },

  {
    section:"Delta Tail",

    name:"Delta Tail Betta",

    pair:"₹150",
    male:"₹80",
    female:"₹80",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  }

];

const sections = {};

fishes.forEach(fish => {

  if(!sections[fish.section]){
    sections[fish.section] = "";
  }

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

  sections[fish.section] += `

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

let finalHTML = "";

for(const sectionName in sections){

  finalHTML += `

    <h1 class="section-title">${sectionName}</h1>

    <div class="container">

      ${sections[sectionName]}

    </div>

  `;

}

document.getElementById("fish-container").innerHTML = finalHTML;
