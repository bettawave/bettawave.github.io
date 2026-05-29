/* =========================
   AQUATIPSAI OFFLINE CORE
========================= */

const fishDB = {
  betta: {
    title: "🐠 Betta Fish Guide",

    feeding: {
      times: "1–2 times daily (small portions only)",
      food: "Betta pellets, bloodworms, daphnia, mosquito larvae"
    },

    care: [
      "Temperature: 26–28°C",
      "pH: 6.5–7.5",
      "Low flow filter required",
      "Weekly 25% water change",
      "Avoid overcrowding",
      "Keep male bettas separate"
    ],

    sick: [
      "Check ammonia (must be 0)",
      "Do 40% water change",
      "Add aquarium salt (small dose)",
      "Increase temperature to 28°C",
      "Use anti-fungal if white patches appear"
    ],

    breeding: [
      "Separate male & female first",
      "Condition with protein food for 7 days",
      "Use shallow tank (5–6 inch water)",
      "Male builds bubble nest",
      "Remove female after spawning",
      "Male guards eggs"
    ]
  },

  guppy: {
    title: "🐟 Guppy Guide",

    feeding: {
      times: "2 times daily",
      food: "Flakes, micro pellets, brine shrimp, daphnia"
    },

    care: [
      "Temperature: 24–28°C",
      "pH: 7–7.8",
      "Keep in groups",
      "Clean water weekly",
      "Avoid overcrowding"
    ],

    breeding: [
      "Livebearer fish",
      "1 male : 2 females",
      "Fry born every 25–30 days",
      "Separate fry for survival"
    ]
  },

  molly: {
    title: "🐟 Molly Guide",

    feeding: {
      times: "2 times daily",
      food: "Algae wafers, flakes, boiled spinach, vegetables"
    },

    care: [
      "Temperature: 24–28°C",
      "pH: 7–8",
      "Needs hard water",
      "Add small amount of aquarium salt"
    ],

    breeding: [
      "Livebearer species",
      "Warm clean water required",
      "Provide plants for fry hiding",
      "Separate fry if needed"
    ]
  },

  shrimp: {
    title: "🦐 Shrimp Guide",

    feeding: {
      times: "Once daily or alternate days",
      food: "Shrimp pellets, algae, blanched vegetables"
    },

    care: [
      "Stable water parameters required",
      "No copper medicines",
      "Use sponge filter",
      "Add moss plants for safety"
    ],

    breeding: [
      "Stable tank required",
      "Females carry eggs under tail",
      "Baby shrimp survive in planted tanks"
    ]
  },

  snail: {
    title: "🐌 Snail Guide",

    feeding: {
      times: "Once daily or natural algae",
      food: "Algae wafers, calcium-rich food, vegetables"
    },

    care: [
      "Avoid acidic water",
      "Need calcium for shell health",
      "Do not overfeed tank",
      "Nerite snails are beginner friendly"
    ]
  }
};

/* =========================
   CHAT FUNCTIONS
========================= */

function toggleChat() {
  const chat = document.getElementById("chatbot");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const box = document.getElementById("chatMessages");

  const msg = input.value.trim().toLowerCase();
  if (!msg) return;

  box.innerHTML += `<div class="user-message">${escapeHtml(msg)}</div>`;
  input.value = "";

  const reply = getAnswer(msg);

  box.innerHTML += `<div class="bot-message">${reply}</div>`;
  box.scrollTop = box.scrollHeight;
}

/* =========================
   BRAIN LOGIC
========================= */

function getAnswer(msg) {

  if (msg.includes("betta")) return buildFish("betta");
  if (msg.includes("guppy")) return buildFish("guppy");
  if (msg.includes("molly")) return buildFish("molly");
  if (msg.includes("shrimp")) return buildFish("shrimp");
  if (msg.includes("snail")) return buildFish("snail");

  return `
  🤖 AquatipsAI Offline Mode<br><br>

  Ask about:<br>
  • Betta care<br>
  • Guppy care<br>
  • Molly care<br>
  • Shrimp care<br>
  • Snail care
  `;
}

/* =========================
   RESPONSE BUILDER
========================= */

function buildFish(type) {
  const f = fishDB[type];

  return `
<b>${f.title}</b><br><br>

<b>🍽 Feeding</b><br>
${f.feeding.times}<br>
${f.feeding.food}<br><br>

<b>🐠 Care</b><br>
${f.care.join("<br>")}<br><br>

<b>🐣 Breeding</b><br>
${f.breeding ? f.breeding.join("<br>") : "Not available"}
  `;
}

/* =========================
   SECURITY
========================= */

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
