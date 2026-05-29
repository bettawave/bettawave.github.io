/* =========================
   AQUATIPSAI MENU FIXED VERSION
========================= */

/* =========================
   OPEN CHAT
========================= */

function toggleChat() {
  const chat = document.getElementById("chatbot");
  if (!chat) return;

  chat.style.display = chat.style.display === "flex" ? "none" : "flex";

  // SHOW MENU WHEN OPENED
  if (chat.style.display === "flex") {
    showMainMenu();
  }
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

  let reply = getReply(msg);

  box.innerHTML += `
    <div class="bot-message">${reply}</div>
  `;

  box.scrollTop = box.scrollHeight;
}

/* =========================
   MAIN MENU (IMPORTANT FIX)
========================= */

function showMainMenu() {
  const box = document.getElementById("chatMessages");

  box.innerHTML += `
    <div class="bot-message">
      👋 <b>Welcome to AquatipsAI</b><br><br>

      Choose a fish:<br><br>

      <button onclick="openFish('betta')">🐠 Betta</button>
      <button onclick="openFish('guppy')">🐟 Guppy</button>
      <button onclick="openFish('molly')">🐟 Molly</button>
      <button onclick="openFish('shrimp')">🦐 Shrimp</button>
      <button onclick="openFish('snail')">🐌 Snail</button>
    </div>
  `;

  box.scrollTop = box.scrollHeight;
}

/* =========================
   OPEN FISH MENU
========================= */

function openFish(type) {

  const data = fishData(type);

  const box = document.getElementById("chatMessages");

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
   TEXT INPUT RESPONSES
========================= */

function getReply(msg) {

  if (msg.includes("betta")) return fishData("betta").care;
  if (msg.includes("guppy")) return fishData("guppy").care;
  if (msg.includes("molly")) return fishData("molly").care;
  if (msg.includes("shrimp")) return fishData("shrimp").care;
  if (msg.includes("snail")) return fishData("snail").care;

  return `
  🤖 Choose a fish from menu or click buttons above.
  `;
}

/* =========================
   FISH DATABASE (INLINE FIX)
   (NO EXTERNAL FILES NEEDED)
========================= */

function fishData(type) {

  const db = {

    betta: {
      title: "🐠 Betta Fish Guide",
      feeding: "1–2 times daily. Food: pellets, bloodworms",
      care: "26–28°C, clean water, low flow filter",
      breeding: "Separate pair, bubble nest, remove female after spawning"
    },

    guppy: {
      title: "🐟 Guppy Guide",
      feeding: "2 times daily. Food: flakes, brine shrimp",
      care: "24–28°C, group fish, clean water",
      breeding: "Livebearer, fry every 25–30 days"
    },

    molly: {
      title: "🐟 Molly Guide",
      feeding: "2 times daily. Food: algae wafers, veggies",
      care: "24–28°C, slightly hard water",
      breeding: "Livebearer fish, fry need hiding plants"
    },

    shrimp: {
      title: "🦐 Shrimp Guide",
      feeding: "Once daily or alternate days. Shrimp pellets, algae",
      care: "Stable water, no copper, moss plants",
      breeding: "Egg carrying female, planted tank needed"
    },

    snail: {
      title: "🐌 Snail Guide",
      feeding: "Once daily or algae naturally. Calcium food",
      care: "Stable pH, avoid acidic water",
      breeding: "Eggs laid on glass or plants"
    }
  };

  return db[type];
}

/* =========================
   ESCAPE HTML
========================= */

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
