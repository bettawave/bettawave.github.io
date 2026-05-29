/* =========================
   AQUATIPSAI OFFLINE BRAIN
========================= */

const fishDB = {
  betta: {
    title: "🐠 Betta Fish Guide",

    feeding: {
      times: "Feed 1–2 times daily (small portions only)",
      food: "Best food: Betta pellets, bloodworms, daphnia, mosquito larvae"
    },

    care: `
• Temperature: 26–28°C  
• pH: 6.5–7.5  
• Low flow filter required  
• Weekly 25% water change  
• Avoid overcrowding  
• Keep alone or with peaceful fish
    `,

    sick: `
⚠️ Sick Betta Treatment:
• Check ammonia (must be 0)
• Do 40% water change
• Add aquarium salt (small dose)
• Increase temperature slightly (28°C)
• Use anti-fungal if white patches appear
    `,

    breeding: `
🐣 Betta Breeding:
• Separate male & female first
• Condition with protein food 7 days
• Use shallow tank (5–6 inch water)
• Male builds bubble nest
• Remove female after spawning
• Male guards eggs
    `
  },

  guppy: {
    title: "🐟 Guppy Guide",

    feeding: {
      times: "Feed 2 times daily",
      food: "Flakes, micro pellets, brine shrimp, daphnia"
    },

    care: `
• Temp: 24–28°C  
• pH: 7–7.8  
• Keep in groups  
• Clean water weekly  
• Avoid overcrowding  
    `,

    breeding: `
🐣 Guppy Breeding:
• Livebearer fish
• 1 male : 2 females
• Fry born every 25–30 days
• Separate fry for survival
    `
  },

  molly: {
    title: "🐟 Molly Guide",

    feeding: {
      times: "Feed 2 times daily",
      food: "Algae wafers, flakes, boiled spinach, vegetables"
    },

    care: `
• Temp: 24–28°C  
• pH: 7–8  
• Needs hard water  
• Add salt in small quantity  
    `,

    breeding: `
🐣 Molly Breeding:
• Livebearer
• Warm clean water
• Plants for fry hiding
• Separate fry if needed
    `
  },

  shrimp: {
    title: "🦐 Shrimp Guide",

    feeding: {
      times: "Feed once daily or alternate days",
      food: "Shrimp pellets, algae, blanched zucchini, spinach"
    },

    care: `
• Very stable water required  
• No copper medicines  
• Sponge filter only  
• Moss plants recommended  
    `,

    breeding: `
🐣 Shrimp Breeding:
• Stable tank needed
• Females carry eggs under tail
• Baby shrimps survive in planted tanks
    `
  },

  snail: {
    title: "🐌 Snail Guide",

    feeding: {
      times: "Feed once daily or natural algae",
      food: "Algae wafers, calcium-rich food, vegetables"
    },

    care: `
• Avoid acidic water  
• Need calcium for shell  
• Do not overfeed tank  
• Nerite snails best for beginners  
    `
  }
};

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

  box.innerHTML += `<div class="user-message">${escapeHtml(msg)}</div>`;
  input.value = "";

  const reply = getAnswer(msg);

  box.innerHTML += `<div class="bot-message">${reply}</div>`;
  box.scrollTop = box.scrollHeight;
}

/* =========================
   MAIN LOGIC (BRAIN)
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
  • Guppy breeding<br>
  • Molly tank setup<br>
  • Shrimp care<br>
  • Snail care
  `;
}

/* =========================
   BUILD FISH RESPONSE
========================= */

function buildFish(type) {
  const f = fishDB[type];

  return `
<b>${f.title}</b><br><br>

<b>🍽 Feeding</b><br>
${f.feeding.times}<br>
${f.feeding.food}<br><br>

<b>🐠 Care</b><br>
${f.care}<br><br>

<b>🐣 Breeding</b><br>
${f.breeding}<br><br>

👉 Ask: "${type} care", "${type} breeding"
  `;
}

/* =========================
   HTML SAFE
========================= */

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
