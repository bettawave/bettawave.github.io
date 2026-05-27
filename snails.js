const snails = [

  {
    name: "Red Cherry Shrimp",
    image: "https://i.ibb.co/TD8KY1PZ/rcs1.jpg",
    price: "₹40 / piece"
  },

  {
    name: "Blue Dream Shrimp",
    image: "https://i.ibb.co/v4QqC1bJ/bds1.jpg",
    price: "₹60 / piece"
  },

  {
    name: "Yellow Shrimp",
    image: "https://i.ibb.co/kVxQ3p8y/ys1.jpg",
    price: "₹60 / piece"
  },

  {
    name: "Apple Snail",
    image: "https://i.ibb.co/placeholder/goldenapple.jpg",
    price: "₹35 / piece"
  },
  {
    name: "Assasin Snail",
    image: "https://i.ibb.co/placeholder/goldenapple.jpg",
    price: "₹60 / piece"
  },
  

  {
    name: "Nerite Snail",
    image: "https://i.ibb.co/placeholder/nerite.jpg",
    price: "₹150 / piece"
  }

];

const container = document.getElementById("snailContainer");

snails.forEach(item => {

  container.innerHTML += `

    <div class="card">

      <img src="${item.image}" alt="${item.name}">

      <div class="card-content">
        <h2>${item.name}</h2>
        <p class="price">${item.price}</p>
      </div>

    </div>

  `;

});
