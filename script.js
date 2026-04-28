function isDblKeyPressed() {
   document.getElementById("demon").innerHTML += "Welcome!";
}


function isKeyPressed(event) {
  let text = "";
  if (event.altKey) {
    text = "Bulb";
  } else {
    text = "";
  }
  document.getElementById("Bright").innerHTML = text;
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  
  console.log(user, pass);   

  if (
    (user === "Hifrom" && pass === "Smile") ||
    (user === "Jikay" && pass === "Lamp") ||
    (user === "DT" && pass === "Doll") ||
    (user === "Byul" && pass === "Smoke")
  ) {
    document.getElementById("result").textContent = "rooms";
  } else {
    document.getElementById("result").textContent = "Invalid";
  }
}

function sendMessage() {
  let input = document.getElementById("msgInput");
  let text = input.value.trim();

  if (text === "") return;

  let msgBox = document.createElement("div");
  msgBox.className = "message";

  msgBox.innerHTML = "<span class='username'>You:</span> " + text;

  document.getElementById("messages").appendChild(msgBox);

  input.value = "";
}
<--Dev Log 2: This is kinda stressful, some weird pressure on me for no reason --!>
