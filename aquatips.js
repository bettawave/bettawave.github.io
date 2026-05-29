function toggleChat(){

  const chatbot =
  document.getElementById("chatbot");

  if(chatbot.style.display === "flex"){

    chatbot.style.display = "none";

  }

  else{

    chatbot.style.display = "flex";

  }

}

function sendMessage(){

  const input =
  document.getElementById("userInput");

  const messages =
  document.getElementById("chatMessages");

  let text = input.value.trim();

  if(text === "") return;

  messages.innerHTML += `

    <div class="user-message">
      ${text}
    </div>

  `;

  let reply =
  getBotReply(text.toLowerCase());

  messages.innerHTML += `

    <div class="bot-message">
      ${reply}
    </div>

  `;

  input.value = "";

  messages.scrollTop =
  messages.scrollHeight;

}

document
.getElementById("userInput")
.addEventListener("keypress", function(e){

  if(e.key === "Enter"){

    sendMessage();

  }

});

function getBotReply(msg){

  /* ========================= */
  /* BETTA */
  /* ========================= */

  if(
    msg.includes("breed betta") ||
    msg.includes("betta breeding")
  ){

    return `

    <b>🐠 How to Breed Betta Fish</b><br><br>

    1. Keep male and female separately.<br>
    2. Feed protein-rich food for 1-2 weeks.<br>
    3. Use shallow tank (5-6 inch water).<br>
    4. Add indian almond leaf or bubble wrap.<br>
    5. Male will build bubble nest.<br>
    6. Introduce female carefully.<br>
    7. After spawning remove female.<br>
    8. Male cares for eggs.<br>
    9. Remove male once fry become free swimming.<br>
    10. Feed infusoria then baby brine shrimp.

    `;

  }

  else if(
    msg.includes("betta care") ||
    msg.includes("care for betta")
  ){

    return `

    <b>🐠 Betta Care Guide</b><br><br>

    • Temperature: 26-28°C<br>
    • pH: 6.5-7.5<br>
    • Use low flow filter<br>
    • Weekly water change 25%<br>
    • Feed high protein food<br>
    • Avoid fin nippers<br>
    • Keep tank clean

    `;

  }

  else if(
    msg.includes("betta dying") ||
    msg.includes("betta sick")
  ){

    return `

    <b>⚠️ Betta Fish Dying?</b><br><br>

    Common reasons:<br><br>

    • Poor water quality<br>
    • Ammonia spike<br>
    • Overfeeding<br>
    • Cold water<br>
    • Fin rot or fungal infection<br><br>

    Immediately:<br>
    • Change 40% water<br>
    • Add anti chlorine<br>
    • Keep temperature stable<br>
    • Avoid overfeeding<br><br>

    Kindly join the WhatsApp group provided on the website for expert help.

    `;

  }

  /* ========================= */
  /* GUPPY */
  /* ========================= */

  else if(
    msg.includes("guppy breeding") ||
    msg.includes("breed guppy")
  ){

    return `

    <b>🐠 Guppy Breeding Tips</b><br><br>

    • Keep ratio 1 male : 2 female<br>
    • Maintain clean water<br>
    • Feed quality food<br>
    • Add floating plants<br>
    • Separate fry after birth<br>
    • Guppies give birth every 25-30 days

    `;

  }

  else if(
    msg.includes("guppy care") ||
    msg.includes("care for guppy")
  ){

    return `

    <b>🐠 Guppy Care</b><br><br>

    • Temperature: 24-28°C<br>
    • pH: 7-7.8<br>
    • Weekly water changes<br>
    • Feed flakes + live food<br>
    • Keep in groups<br>
    • Avoid overcrowding

    `;

  }

  /* ========================= */
  /* MOLLY */
  /* ========================= */

  else if(
    msg.includes("molly breeding") ||
    msg.includes("breed molly")
  ){

    return `

    <b>🐠 Molly Breeding</b><br><br>

    • Mollies are livebearers<br>
    • 1 male with 2-3 females<br>
    • Warm clean water<br>
    • Add plants for fry hiding<br>
    • Feed quality food<br>
    • Separate fry if needed

    `;

  }

  else if(
    msg.includes("molly care")
  ){

    return `

    <b>🐠 Molly Care Guide</b><br><br>

    • pH: 7-8<br>
    • Temperature: 24-28°C<br>
    • Mollies prefer harder water<br>
    • Weekly water changes<br>
    • Feed algae + protein food

    `;

  }

  /* ========================= */
  /* SHRIMPS */
  /* ========================= */

  else if(
    msg.includes("shrimp care") ||
    msg.includes("shrimp")
  ){

    return `

    <b>🦐 Shrimp Care</b><br><br>

    • Stable water parameters are important<br>
    • Avoid copper medicines<br>
    • Feed shrimp pellets and algae<br>
    • Add moss and hiding spots<br>
    • Maintain low ammonia and nitrite

    `;

  }

  /* ========================= */
  /* SNAILS */
  /* ========================= */

  else if(
    msg.includes("snail")
  ){

    return `

    <b>🐌 Snail Care</b><br><br>

    • Snails help clean algae<br>
    • Nerite and Mystery snails are beginner friendly<br>
    • Add calcium source for shell health<br>
    • Avoid too much leftover food

    `;

  }

  /* ========================= */
  /* WATER PARAMETERS */
  /* ========================= */

  else if(
    msg.includes("ph")
  ){

    return `

    <b>💧 Aquarium pH Guide</b><br><br>

    • Betta: 6.5 - 7.5<br>
    • Guppy: 7 - 7.8<br>
    • Molly: 7 - 8<br>
    • Shrimp: 6.5 - 7.5<br><br>

    Use test kits regularly and avoid sudden pH changes.

    `;

  }

  else if(
    msg.includes("water change")
  ){

    return `

    <b>💧 Water Change Guide</b><br><br>

    • Weekly 25-30% water change is ideal<br>
    • Always use anti chlorine<br>
    • Match temperature properly<br>
    • Avoid changing 100% water

    `;

  }

  else if(
    msg.includes("ammonia")
  ){

    return `

    <b>⚠️ Ammonia Alert</b><br><br>

    Ammonia is toxic to fishes.<br><br>

    Causes:<br>
    • Overfeeding<br>
    • Dirty tank<br>
    • Dead fish<br><br>

    Solution:<br>
    • Immediate water change<br>
    • Use beneficial bacteria<br>
    • Avoid overstocking

    `;

  }

  /* ========================= */
  /* FISH PAIRING */
  /* ========================= */

  else if(
    msg.includes("pair")
  ){

    return `

    <b>🐠 Fish Pairing Tips</b><br><br>

    • Avoid keeping male bettas together<br>
    • Guppies and mollies are community fishes<br>
    • Shrimp may get eaten by aggressive fishes<br>
    • Always research compatibility before mixing species

    `;

  }

  /* ========================= */
  /* FOOD */
  /* ========================= */

  else if(
    msg.includes("food")
  ){

    return `

    <b>🍤 Fish Food Tips</b><br><br>

    • Feed 1-2 times daily<br>
    • Avoid overfeeding<br>
    • Use protein food for bettas<br>
    • Feed live/frozen food weekly<br>
    • Remove uneaten food

    `;

  }

  /* ========================= */
  /* DEFAULT */
  /* ========================= */

  else{

    return `

    Sorry 😅<br><br>

    I currently specialize in:<br><br>

    • Betta fishes<br>
    • Guppies<br>
    • Mollies<br>
    • Shrimps<br>
    • Snails<br>
    • Aquarium care<br>
    • Fish breeding<br>
    • Water parameters<br><br>

    Kindly join the WhatsApp group provided on the website for more detailed support.

    `;

  }

}
