const button = document.querySelector("#counterButton");

let clicks = 0;

button.addEventListener("click", () => {
  clicks += 1;
  button.textContent = `Clicked ${clicks} ${clicks === 1 ? "time" : "times"}`;
});
