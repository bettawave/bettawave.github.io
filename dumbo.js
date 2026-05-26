const dumbo = [

  {
    name:"Dumbo Ear OHM",

    pair:"₹500",
    male:"₹350",
    female:"₹200",

    images:[
      "https://i.ibb.co/GfzLKrSJ/DOHM.jpg",
"https://i.ibb.co/Wvt4FSxk/dohmw.jpg",
"https://i.ibb.co/6cKhqcFP/dumbogoldpk.jpg",
      "https://i.ibb.co/cc4xr56m/whitedumbpk.jpg",
    ]
  }

];

let output = "";

dumbo.forEach(fish => {

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

document.getElementById("dumbo-container").innerHTML = output;
