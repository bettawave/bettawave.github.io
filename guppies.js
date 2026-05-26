const guppies = [

  {
    name: "Platinum Red Super Dumbo Ear",
    image: "https://i.ibb.co/9Hg0CDWk/platdum1.jpg",
    price: "₹200 / Pair"
  },

  {
    name: "Blue Topaz",
    image: "https://i.ibb.co/vvkKk3Ms/bluetopaz.jpg",
    price: "₹200 / Pair"
  },

  {
    name: "Red Topaz",
    image: "https://i.ibb.co/XZMrDyCB/red-topaz.jpg",
    price: "₹140 / Pair"
  },

  {
    name: "Short Body Blonde Koi",
    image: "https://i.ibb.co/wZYn5Sk7/sbbk1.jpg",
    price: "₹200 / Pair"
  },

  {
    name: "Albino Topaz White",
    image: "https://i.ibb.co/1G1Xg0Fs/atw1.jpg",
    price: "₹180 / Pair"
  },

  {
    name: "Gold Guppies",
    image: "https://i.ibb.co/qYYYC1t2/goldgup1.jpg",
    price: "₹180 / Pair"
  },

  {
    name: "HB Red Rose Cauli Dorsal",
    image: "https://i.ibb.co/dstSrDT6/hbrc1.jpg",
    price: "₹200 / Pair"
  },

  {
    name: "White Tuxedo",
    image: "https://i.ibb.co/4gRJZfmT/wt1.jpg",
    price: "₹100 / Pair"
  },

  {
    name: "Blue Dragon",
    image: "https://i.ibb.co/PvRzPGmD/bd1.jpg",
    price: "₹150 / Pair"
  },

  {
    name: "Chilli Mosaic",
    image: "https://i.ibb.co/vCMcjNhn/cm1.jpg",
    price: "₹150 / Pair"
  }

];

const container = document.getElementById("guppyContainer");

guppies.forEach(guppy => {

  container.innerHTML += `

    <div class="card">
      <img src="${guppy.image}" alt="${guppy.name}">
      
      <div class="card-content">
        <h2>${guppy.name}</h2>
        <p class="price">${guppy.price}</p>
      </div>
      
    </div>

  `;

});
