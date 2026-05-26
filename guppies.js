const guppies = [

  {
    name: "Platinum Red Super Dumbo Ear",
    image: "https://i.ibb.co/7N0p0rj/guppy1.jpg"
  },

  {
    name: "Blue Topaz",
    image: "https://i.ibb.co/wN8Y8KX/guppy2.jpg"
  },

  {
    name: "Red Topaz",
    image: "https://i.ibb.co/k4V4xQw/guppy3.jpg"
  },

  {
    name: "Short Body Blonde Koi",
    image: "https://i.ibb.co/7y3vY5M/guppy4.jpg"
  },

  {
    name: "Albino Topaz White",
    image: "https://i.ibb.co/x8J2b5r/guppy5.jpg"
  },

  {
    name: "Gold Guppies",
    image: "https://i.ibb.co/WfY4r8v/guppy6.jpg"
  },

  {
    name: "HB Red Rose Cauli Dorsal",
    image: "https://i.ibb.co/BnJ1M6d/guppy7.jpg"
  },

  {
    name: "White Tuxido",
    image: "https://i.ibb.co/6mWjW7g/guppy8.jpg"
  },

  {
    name: "Blue Dragon",
    image: "https://i.ibb.co/fF2w6j8/guppy9.jpg"
  },

  {
    name: "Chilli Mosaic",
    image: "https://i.ibb.co/Q9n9M0r/guppy10.jpg"
  }

];

const container = document.getElementById("guppyContainer");

guppies.forEach(guppy => {

  container.innerHTML += `

    <div class="card">
      <img src="${guppy.image}" alt="${guppy.name}">
      <h2>${guppy.name}</h2>
    </div>

  `;

});
