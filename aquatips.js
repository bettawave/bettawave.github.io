/* =========================
   AQUATIPSAI BRAIN (CORE)
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
   MAIN ROUTER (BRAIN LOGIC)
========================= */

function getAnswer(msg) {

  if (msg.includes("betta")) return buildFish(BETTA_DATA);
  if (msg.includes("guppy")) return buildFish(GUPPY_DATA);
  if (msg.includes("molly")) return buildFish(MOLLY_DATA);
  if (msg.includes("shrimp")) return buildFish(SHRIMP_DATA);
  if (msg.includes("snail")) return buildFish(SNAIL_DATA);

  return `
  🤖 AquatipsAI Offline Mode<br><br>
  Ask about: Betta, Guppy, Molly, Shrimp, Snail
  `;
}

/* =========================
   RESPONSE BUILDER
========================= */

function buildFish(f) {
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
