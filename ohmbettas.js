```javascript id="a4n8zv"
const fishes = [

  {
    name: "Regular OHM Betta",

    male: "₹250 onwards",
    female: "₹150 onwards",

    images: [
      "https://i.ibb.co/F4qCP9Bj/dt1.jpg",
      "https://i.ibb.co/nqRSLg6V/dt2.jpg"
    ]
  },

  {
    name: "Candy OHM Betta",

    male: "₹400 onwards",
    female: "₹250 onwards",

    images: [
      "https://i.ibb.co/F4qCP9Bj/dt1.jpg",
      "https://i.ibb.co/nqRSLg6V/dt2.jpg"
    ]
  }

];

const fishContainer = document.getElementById("fishContainer");

fishes.forEach(fish => {

  let imagesHTML = "";

  fish.images.forEach(img => {

    imagesHTML += `
      <img src="${img}" class="fish-image">
    `;

  });

  fishContainer.innerHTML += `

    <div class="fish-card">

      <h2>${fish.name}</h2>

      <p><strong>Male:</strong> ${fish.male}</p>

      <p><strong>Female:</strong> ${fish.female}</p>

      <div class="image-gallery">

        ${imagesHTML}

      </div>

    </div>

  `;

});
```
