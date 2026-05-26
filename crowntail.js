const fishes = [

  {
    name:"Crowntail Betta",

    pair:"₹400-700",
    male:"₹250-500",
    female:"₹150-250",

    images:[
      "https://i.ibb.co/ycpRX2Zd/ct1.jpg",
      "https://i.ibb.co/fYnFr3r2/ct2.jpg",
      "https://i.ibb.co/93TPkZVp/ct3.jpg",
      "https://i.ibb.co/NdWRXtgc/ct4.jpg",
      "https://i.ibb.co/39m6yp0q/ct5.jpg"
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
