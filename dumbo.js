const fishes = [

  {
    name:"Dumbo Ear OHM and Plakats",

    pair:"₹500",
    male:"₹350",
    female:"₹200",

    images:[
     "https://i.ibb.co/zWqDcmTt/dohm.jpg",
"https://i.ibb.co/Y46nbmQ3/dohmw.jpg",
"https://i.ibb.co/yFDYgH4M/dumbogoldpk.jpg",
"https://i.ibb.co/XxDtSdv4/dumbpk.jpg"
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

document.getElementById("dumbo-container").innerHTML = output;
