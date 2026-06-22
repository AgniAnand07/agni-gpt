function sendMessage(){

let input=document.getElementById("userInput");

let text=input.value;

if(text=="") return;

let messages=document.getElementById("messages");

messages.innerHTML +=
`<div class="user-message">${text}</div>`;

messages.innerHTML +=
`<div class="ai-message">Thinking...</div>`;

input.value="";

messages.scrollTop=messages.scrollHeight;

}
