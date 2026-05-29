```javascript id="t6ks1s"
const fishes = [

  {
    name: "OHM Betta",
    price: "₹300 onwards",

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

      <p>${fish.price}</p>

      <div class="image-gallery">

        ${imagesHTML}

      </div>

    </div>

  `;

});
```
