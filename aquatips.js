const API_KEY = "AQ.Ab8RN6KY_-x2Zu8MhkfSyexn5kPu_-pheFNXUqaABIb2tVhn3w";

/* =========================
   TOGGLE CHAT WINDOW
========================= */

function toggleChat() {
  const chatbot = document.getElementById("chatbot");

  if (!chatbot) return;

  chatbot.style.display =
    chatbot.style.display === "flex" ? "none" : "flex";
}

/* =========================
   ENTER KEY SUPPORT
========================= */

function handleKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

/* =========================
   SEND MESSAGE TO AI
========================= */

async function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("chatMessages");

  if (!input || !messages) return;

  const text = input.value.trim();
  if (text === "") return;

  /* USER MESSAGE */
  messages.innerHTML += `
    <div class="user-message">
      ${escapeHtml(text)}
    </div>
  `;

  input.value = "";

  /* LOADING MESSAGE */
  const loadingId = "typing-bot";
  messages.innerHTML += `
    <div class="bot-message" id="${loadingId}">
      AquatipsAI is thinking...
    </div>
  `;

  messages.scrollTop = messages.scrollHeight;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: buildSystemPrompt(text)
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    document.getElementById("typing-bot")?.remove();

    let reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not generate a response.";

    messages.innerHTML += `
      <div class="bot-message">
        ${formatReply(reply)}
      </div>
    `;

  } catch (error) {

    document.getElementById("typing-bot")?.remove();

    messages.innerHTML += `
      <div class="bot-message">
        ⚠ Unable to connect to AquatipsAI. Try again later.
      </div>
    `;
  }

  messages.scrollTop = messages.scrollHeight;
}

/* =========================
   SYSTEM PROMPT (FISH AI RULES)
========================= */

function buildSystemPrompt(userText) {
  return `
You are AquatipsAI, an expert freshwater aquarium assistant.

You ONLY help with:
- Betta fish care & breeding
- Guppies, mollies
- Shrimp tanks
- Snail care
- Aquarium setup
- Water parameters (pH, ammonia, nitrate)
- Fish diseases & treatment
- Tank mates & compatibility
- Fish feeding
- Aquarium cycling

Rules:
- Always give simple step-by-step answers
- Be beginner friendly
- Be practical (aquarium owner advice)
- If question is outside fish/aquarium topic, reply:
"Kindly join the WhatsApp group provided on the website for further support."

User question:
${userText}
`;
}

/* =========================
   FORMAT AI RESPONSE
========================= */

function formatReply(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

/* =========================
   SECURITY: ESCAPE HTML
========================= */

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
