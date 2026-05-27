let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const cartItems =
document.getElementById("cart-items");

const totalPrice =
document.getElementById("total-price");

function displayCart() {

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    cartItems.innerHTML += `

      <div class="cart-item">

        <p>
          ${item.name}
        </p>

        <p>
          ₹${item.price}
        </p>

        <button onclick="removeItem(${index})">
          Remove
        </button>

      </div>

    `;

  });

  totalPrice.innerText =
    `Total: ₹${total}`;
}

displayCart();

function removeItem(index) {

  cart.splice(index, 1);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  displayCart();
}

function clearCart() {

  localStorage.removeItem("cart");

  cart = [];

  displayCart();
}

function sendOrder() {

  if(cart.length === 0){

    alert("Cart is empty!");

    return;
  }

  let message =
    "🐠 *Aquarium Fish Order* %0A%0A";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    message +=
      `${index+1}. ${item.name} - ₹${item.price}%0A`;

  });

  message += `%0A💰 Total: ₹${total}`;

  const number1 = "918104266402";

  const number2 = "919147731025";

  const url1 =
    `https://wa.me/${number1}?text=${message}`;

  const url2 =
    `https://wa.me/${number2}?text=${message}`;

  window.open(url1, "_blank");

  window.open(url2, "_blank");
}
