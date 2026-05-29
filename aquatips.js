const API_KEY = "AQ.Ab8RN6KY_-x2Zu8MhkfSyexn5kPu_-pheFNXUqaABIb2tVhn3w";

/* =========================
   FISH KNOWLEDGE BASE (MENU MODE)
========================= */

const fishGuide = {
  betta: {
    title: "🐠 Betta Fish Guide",
    feeding: "Feed 1–2 times a day (small portions only). Best food: Betta pellets, bloodworms, daphnia.",
    questions: {
      care: "Betta Care",
      sick: "Sick Betta Treatment",
      breeding: "Betta Breeding Guide",
      tank: "Tank Setup"
    }
  },

  guppy: {
    title: "🐟 Guppy Guide",
    feeding: "Feed 2 times a day. Best food: flakes, micro pellets, brine shrimp.",
    questions: {
      care: "Guppy Care",
      breeding: "Guppy Breeding",
      fry: "Guppy Fry Care",
      tank: "Tank Setup"
    }
  },

  molly: {
    title: "🐟 Molly Guide",
    feeding: "Feed 2 times a day. Best food: algae wafers, flakes, veggies.",
    questions: {
      care: "Molly Care",
      breeding: "Molly Breeding",
      disease: "Common Diseases",
      tank: "Tank Setup"
    }
  },

  shrimp: {
    title: "🦐 Shrimp Guide",
    feeding: "Feed once a day or alternate days. Best food: shrimp pellets, algae, blanched veggies.",
    questions: {
      care: "Shrimp Care",
      breeding: "Shrimp Breeding",
      tank: "Tank Setup",
      water: "Water Parameters"
    }
  },

  snail: {
    title: "🐌 Snail Guide",
    feeding: "Feed once daily or natural algae. Best food: algae wafers, calcium foods.",
    questions: {
      care: "Snail Care",
      shell: "Shell Health",
      tank: "Tank Setup"
    }
  }
};

/* =========================
   TOGGLE CHAT
========================= */

function toggleChat() {
  const chatbot = document.getElementById("chatbot");
  if (!chatbot) return;

  chatbot.style.display =
    chatbot.style.display === "flex" ? "none" : "flex";
}

/* =========================
   ENTER KEY
========================= */

function handleKey(event) {
  if (event.key === "Enter") sendMessage();
}

/* =========================
   SEND MESSAGE
========================= */

async function sendMessage(customText = null) {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("chatMessages");

  const text = (customText || input.value).trim();
  if (!text) return;

  messages.innerHTML += `
    <div class="user-message">${escapeHtml(text)}</div>
  `;

  if (input) input.value = "";

  const loadingId = "loading";
  messages.innerHTML += `
    <div class="bot-message" id="${loadingId}">
      AquatipsAI is thinking...
    </div>
  `;

  messages.scrollTop = messages.scrollHeight;

  /* =========================
     LOCAL MENU FIRST (FAST ANSWERS)
  ========================= */

  const localReply = getLocalFishReply(text.toLowerCase());

  if (localReply) {
    document.getElementById("loading")?.remove();

    messages.innerHTML += `
      <div class="bot-message">${localReply}</div>
    `;

    return;
  }

  /* =========================
     FALLBACK TO GEMINI AI
  ========================= */

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: systemPrompt(text)
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    document.getElementById("loading")?.remove();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    messages.innerHTML += `
      <div class="bot-message">${format(reply)}</div>
    `;
  } catch (e) {
    document.getElementById("loading")?.remove();

    messages.innerHTML += `
      <div class="bot-message">
        ⚠ Unable to connect to AquatipsAI.
      </div>
    `;
  }

  messages.scrollTop = messages.scrollHeight;
}

/* =========================
   LOCAL FISH RESPONSES
========================= */

function getLocalFishReply(msg) {
  if (msg.includes("betta")) return fishMenu("betta");
  if (msg.includes("guppy")) return fishMenu("guppy");
  if (msg.includes("molly")) return fishMenu("molly");
  if (msg.includes("shrimp")) return fishMenu("shrimp");
  if (msg.includes("snail")) return fishMenu("snail");

  return null;
}

/* =========================
   FISH MENU BUILDER
========================= */

function fishMenu(type) {
  const fish = fishGuide[type];

  let html = `<b>${fish.title}</b><br><br>`;
  html += `<b>Feeding:</b> ${fish.feeding}<br><br>`;
  html += `<b>Questions:</b><br><br>`;

  for (let key in fish.questions) {
    html += `• ${fish.questions[key]}<br>`;
  }

  html += `<br>👉 Ask any question like:
  "betta care", "guppy breeding", "shrimp tank setup"`;

  return html;
}

/* =========================
   SYSTEM PROMPT (AI CONTROL)
========================= */

function systemPrompt(userText) {
  return `
You are AquatipsAI, an expert aquarium assistant.

Focus only on:
- Betta, Guppy, Molly, Shrimp, Snail care
- Breeding guides
- Disease treatment
- Water parameters
- Tank setup

Always:
- Give step-by-step answers
- Keep beginner friendly
- Be practical for Indian aquarium conditions

If unrelated topic:
Say: "Please ask only aquarium related questions or join WhatsApp group."

User question:
${userText}
`;
}

/* =========================
   FORMAT
========================= */

function format(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
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
