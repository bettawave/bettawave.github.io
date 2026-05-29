/* =========================
   AQUATIPSAI OFFLINE BRAIN (CONNECTED)
========================= */

/* =========================
   TOGGLE CHAT
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
   MAIN BRAIN
========================= */

function getAnswer(msg) {

  if (msg.includes("betta")) return buildFish(BETTA_DATA, "betta");
  if (msg.includes("guppy")) return buildFish(GUPPY_DATA, "guppy");
  if (msg.includes("molly")) return buildFish(MOLLY_DATA, "molly");
  if (msg.includes("shrimp")) return buildFish(SHRIMP_DATA, "shrimp");
  if (msg.includes("snail")) return buildFish(SNAIL_DATA, "snail");

  return `
🤖 AquatipsAI Offline Mode<br><br>

Ask about:<br>
• Betta fish<br>
• Guppy care<br>
• Molly tank setup<br>
• Shrimp tank<br>
• Snail care<br><br>

👉 Example: "betta care", "guppy breeding"
  `;
}

/* =========================
   BUILD FISH RESPONSE MENU
========================= */

function buildFish(data, type) {
  return `
<b>${data.title}</b><br><br>

<b>🍽 Feeding</b><br>
${data.feeding.times}<br>
${data.feeding.food}<br><br>

<b>🐠 Care</b><br>
${data.care}<br><br>

<b>🐣 Breeding</b><br>
${data.breeding}<br><br>

<b>⚠️ Diseases</b><br>
${data.diseases}<br><br>

<b>💡 Tips</b><br>
${data.tips}<br><br>

👉 Try: "${type} care", "${type} breeding", "${type} diseases"
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
