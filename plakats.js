const plakats = [

  {
    name:"HMPK Betta",

    pair:"₹500 onwards",
    male:"₹200 onwards",
    female:"₹200 onwards",

    images:[
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Betta_splendens.jpg"
    ]
  }

];

let output = "";

plakats.forEach(fish => {

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

document.getElementById("plakat-container").innerHTML = output;
