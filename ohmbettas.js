const ohms = [

  {
    name:"OHM Betta",

    pair:"₹250-500",
    male:"₹150-300",
    female:"₹80-150",

    images:[
      "https://i.ibb.co/60Qx8cpb/ohm1.jpg",
      "https://i.ibb.co/fGP7kn9Y/ohm2.jpg",
      "https://i.ibb.co/BHp1WVJp/ohm3.jpg",
      "https://i.ibb.co/LmM78FH/ohm4.jpg"
    ]
  }

];

let output = "";

ohms.forEach(fish => {

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

document.getElementById("ohm-container").innerHTML = output;
