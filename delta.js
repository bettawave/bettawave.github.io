const fishes = [

  {
    name:"Delta Tail Betta",

    pair:"₹150-300",
    male:"₹80-180",
    female:"₹80-120",

    images:[
      "https://i.ibb.co/F4qCP9Bj/dt1.jpg",
      "https://i.ibb.co/nqRSLg6V/dt2.jpg"
    ]
  }

];

let output = "";

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

document.getElementById("delta-container").innerHTML = output;
