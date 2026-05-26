const fishes = [

  {
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
    name:"Mahachai",

    pair:"₹1200",
    male:"₹800",
    female:"₹450",

    images:[
      "https://i.ibb.co/4LShVsH/maha1.jpg",
      "https://i.ibb.co/TB2jgfZq/maha2.jpg"
    ]
  }

];

let output = "";

fishes.forEach(fish => {

  let imageHTML = "";

  fish.images.forEach(img => {

    imageHTML += `
      <img src="${img}" class="fish-image">
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

document.getElementById("wild-container").innerHTML = output;
