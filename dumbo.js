const dumbo = [

  {
    name:"Dumbo Ear OHM and Plakats",

    pair:"₹500",
    male:"₹350",
    female:"₹200",

    images:[
      "https://i.ibb.co/8grNzPYk/dumbogoldpk.jpg"
    ]
  }

];

let output = "";

dumbo.forEach(fish => {

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

document.getElementById("dumbo-container").innerHTML = output;
