const messages = [
  "Hey my sweet cheeks…<br>I made this just for you 😚 Keep clicking — I’ve got a few things to say.",
  "You’ve worked so hard for this moment.<br>I’m so proud of the strong, smart, beautiful woman you are 💜📚",
  "Don’t stress baby.<br>You’ve got this exam in the bag — and I’ve got your back always 🥺💪🏽",
  "Even when you’re nervous, remember this:<br>You’re magic, you’re brilliant, and you’re never alone ✨💞",
  "After this exam?<br>It’s you + me + celebration mode 🥳🍦 (and maybe some cuddles too)",
  "One last thing before you go ace it…<br>I believe in you with everything in me, and I love you endlessly ❤️🧸"
];

const teddies = [
  "teddy1.png",
  "teddy2.png",
  "teddy3.png",
  "teddy4.png",
  "teddy5.png",
  "teddy6.png"
];

let current = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % messages.length;
  document.getElementById("messageBox").innerHTML = messages[current];
  document.getElementById("teddyImg").src = teddies[current];
});
