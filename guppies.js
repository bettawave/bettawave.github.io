const guppies = [

  {
    id:"albino",
    name:"Albino Topaz White",
    image:"https://i.ibb.co/VYkcKTZk/atw1.jpg",
    price:"₹180 / Pair"
  },

  {
    id:"bluedragon",
    name:"Blue Dragon",
    image:"https://i.ibb.co/Kz0gYdhF/bd1.jpg",
    price:"₹150 / Pair"
  },

  {
    id:"bluetopaz",
    name:"Blue Topaz",
    image:"https://i.ibb.co/4ZhjTmvz/bluetopaz.jpg",
    price:"₹200 / Pair"
  },

  {
    id:"chillimosaic",
    name:"Chilli Mosaic",
    image:"https://i.ibb.co/BH4ZRg0X/cm1.jpg",
    price:"₹150 / Pair"
  },

  {
    id:"goldguppy",
    name:"Gold Guppies",
    image:"https://i.ibb.co/S4q6Zqyt/goldgup1.jpg",
    price:"₹200 / Pair"
  },

  {
    id:"hbredrose",
    name:"HB Red Rose Cauli Dorsal",
    image:"https://i.ibb.co/5gLr1JHD/hbrc1.jpg",
    price:"₹200 / Pair"
  },

  {
    id:"platdumbo",
    name:"Platinum Red Super Dumbo Ear",
    image:"https://i.ibb.co/1JdNP0k5/platdum1.jpg",
    price:"₹200 / Pair"
  },

  {
    id:"redtopaz",
    name:"Red Topaz",
    image:"https://i.ibb.co/XZ9m5LQR/red-topaz.jpg",
    price:"₹150 / Pair"
  },

  {
    id:"shortbodykoi",
    name:"Short Body Blonde Koi",
    image:"https://i.ibb.co/3982sh0V/sbbk1.jpg",
    price:"₹200 / Pair"
  },

  {
    id:"whitetuxedo",
    name:"White Tuxedo",
    image:"https://i.ibb.co/GQppmfbG/wt1.jpg",
    price:"₹100 / Pair"
  }

];

const container =
document.getElementById("guppyContainer");

guppies.forEach(guppy => {

  container.innerHTML += `

    <div class="card" id="${guppy.id}">

      <img src="${guppy.image}" alt="${guppy.name}">

      <div class="card-content">

        <h2>${guppy.name}</h2>

        <p class="price">

          ${guppy.price}

        </p>

      </div>

    </div>

  `;

});
