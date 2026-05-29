/* =========================
   AQUATIPSAI OFFLINE MENU BRAIN
========================= */

/* =========================
   CHAT TOGGLE
========================= */

function toggleChat() {
  const chat = document.getElementById("chatbot");
  if (!chat) return;
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
   MAIN ROUTER
========================= */

function getAnswer(msg) {

  if (msg.includes("betta")) return buildMenu("betta", BETTA_DATA);
  if (msg.includes("guppy")) return buildMenu("guppy", GUPPY_DATA);
  if (msg.includes("molly")) return buildMenu("molly", MOLLY_DATA);
  if (msg.includes("shrimp")) return buildMenu("shrimp", SHRIMP_DATA);
  if (msg.includes("snail")) return buildMenu("snail", SNAIL_DATA);

  return `
🤖 <b>AquatipsAI Menu System</b><br><br>

Choose a fish:<br>
• Betta<br>
• Guppy<br>
• Molly<br>
• Shrimp<br>
• Snail<br><br>

👉 Example: type "betta"
  `;
}

/* =========================
   MENU UI BUILDER
========================= */

function buildMenu(type, data) {

  return `
<b>${data.title}</b><br><br>

<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">

  <button onclick="showSection('${type}','feeding')">🍽 Feeding</button>
  <button onclick="showSection('${type}','care')">🐠 Care</button>
  <button onclick="showSection('${type}','breeding')">🐣 Breeding</button>
  <button onclick="showSection('${type}','diseases')">⚠️ Diseases</button>
  <button onclick="showSection('${type}','tips')">💡 Tips</button>

</div>

👉 Click a button to explore
  `;
}

/* =========================
   SECTION HANDLER
========================= */

function showSection(type, section) {

  const map = {
    betta: BETTA_DATA,
    guppy: GUPPY_DATA,
    molly: MOLLY_DATA,
    shrimp: SHRIMP_DATA,
    snail: SNAIL_DATA
  };

  const d = map[type];

  let text = "";

  if (section === "feeding") {
    text = `
<b>🍽 Feeding</b><br>
${d.feeding.times}<br>
${d.feeding.food}
    `;
  }

  if (section === "care") {
    text = `
<b>🐠 Care</b><br>
${d.care}
    `;
  }

  if (section === "breeding") {
    text = `
<b>🐣 Breeding</b><br>
${d.breeding}
    `;
  }

  if (section === "diseases") {
    text = `
<b>⚠️ Diseases</b><br>
${d.diseases}
    `;
  }

  if (section === "tips") {
    text = `
<b>💡 Tips</b><br>
${d.tips}
    `;
  }

  const box = document.getElementById("chatMessages");

  box.innerHTML += `
    <div class="bot-message">${text}</div>
  `;

  box.scrollTop = box.scrollHeight;
}

/* =========================
   HTML SAFETY
========================= */

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
