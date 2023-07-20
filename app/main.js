const button1 = document.querySelector(".box button.start");
const button2 = document.querySelector(".box button.stop");
const button3 = document.querySelector(".box button.reset");
const h2 = document.querySelector(".box h2");
const home = document.querySelector(".box img");

let count = 0;
let counter;

button1.onclick = () => {
  h2.innerHTML = count;

  counter = setInterval(() => {
    count++;
    h2.innerHTML = count;
  }, 1000);
};

button2.onclick = () => {
  clearInterval(counter);
};

button3.onclick = () => {
  clearInterval(counter);
  count = 0;
  h2.innerHTML = count;
};
