async function sendMessage() {

let input = document.getElementById("userInput");
let text = input.value.trim();

if (text === "") return;

let messages = document.getElementById("messages");

// User message
messages.innerHTML +=
`<div class="user-message">${text}</div>`;

// AI placeholder
messages.innerHTML +=
`<div class="ai-message" id="thinking">Thinking...</div>`;

input.value = "";
messages.scrollTop = messages.scrollHeight;

try {

const response = await fetch("/api/chat", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
message: text
})
});

const data = await response.json();

// Replace "Thinking..." with AI response
document.getElementById("thinking").innerHTML = data.reply;

messages.scrollTop = messages.scrollHeight;

} catch (error) {

document.getElementById("thinking").innerHTML =
"Something went wrong.";

}

}
