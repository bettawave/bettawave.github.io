/* =========================
   AQUATIPSAI OFFLINE BRAIN
========================= */

/* =========================
   CHAT TOGGLE
========================= */

function toggleChat() {
  const chat = document.getElementById("chatbot");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

/* =========================
   ENTER KEY
========================= */

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

/* =========================
   SEND MESSAGE
========================= */

function sendMessage() {
  const input = document.getElementById("userInput");
  const box = document.getElementById("chatMessages");

  const msg = input.value.trim().toLowerCase();
  if (!msg) return;

  box.innerHTML += `
    <div class="user-message">${escapeHtml(msg)}</div>
  `;

  input.value = "";

  const reply = getAnswer(msg);

  box.innerHTML += `
    <div class="bot-message">${reply}</div>
  `;

  box.scrollTop = box.scrollHeight;
}

/* =========================
   CLEAR CHAT
========================= */

function clearChat() {
  const box = document.getElementById("chatMessages");

  box.innerHTML = `
    <div class="bot-message">

      👋 Chat cleared!<br><br>

      Choose a fish:<br><br>

      <button onclick="openFish('betta')">🐠 Betta</button>
      <button onclick="openFish('guppy')">🐟 Guppy</button>
      <button onclick="openFish('molly')">🐟 Molly</button>
      <button onclick="openFish('shrimp')">🦐 Shrimp</button>
      <button onclick="openFish('snail')">🐌 Snail</button>

    </div>
  `;
}

/* =========================
   MENU CLICK
========================= */

function openFish(type) {
  const box = document.getElementById("chatMessages");

  const data = fishDB[type];

  box.innerHTML += `
    <div class="bot-message">

      <b>${data.title}</b><br><br>

      🍽 <b>Feeding</b><br>
      ${data.feeding}<br><br>

      🐠 <b>Care</b><br>
      ${data.care}<br><br>

      🐣 <b>Breeding</b><br>
      ${data.breeding}

    </div>
  `;

  box.scrollTop = box.scrollHeight;
}

/* =========================
   MAIN LOGIC
========================= */

function getAnswer(msg) {

  if (msg.includes("betta")) return fishDB.betta.care;
  if (msg.includes("guppy")) return fishDB.guppy.care;
  if (msg.includes("molly")) return fishDB.molly.care;
  if (msg.includes("shrimp")) return fishDB.shrimp.care;
  if (msg.includes("snail")) return fishDB.snail.care;

  return `
    🤖 Please select a fish from menu or type name like:
    betta care, guppy breeding, shrimp tank
  `;
}

/* =========================
   DATABASE
========================= */

const fishDB = {

  betta: {
    title: "🐠 Betta Fish Guide",
    feeding: "1–2 times daily. Best: pellets, bloodworms",
    care: "26–28°C, clean water, low flow filter",
    breeding: "Bubble nest, separate pair, remove female after spawning"
  },

  guppy: {
    title: "🐟 Guppy Guide",
    feeding: "2 times daily. Flakes, brine shrimp",
    care: "24–28°C, group fish, clean tank",
    breeding: "Livebearer, fry every 25–30 days"
  },

  molly: {
    title: "🐟 Molly Guide",
    feeding: "2 times daily. algae wafers, vegetables",
    care: "24–28°C, slightly hard water",
    breeding: "Livebearer, fry need plants"
  },

  shrimp: {
    title: "🦐 Shrimp Guide",
    feeding: "Once daily or alternate days",
    care: "Stable water, no copper, moss tank",
    breeding: "Egg carrier, planted tank needed"
  },

  snail: {
    title: "🐌 Snail Guide",
    feeding: "Natural algae + calcium food",
    care: "Stable pH, avoid acidic water",
    breeding: "Eggs on glass/plants"
  }

};

/* =========================
   HTML ESCAPE
========================= */

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
