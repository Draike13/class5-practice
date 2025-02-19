//Exercise 1
// document.addEventListener('DOMContentLoaded', function () {
//   alert('Welcome to My Website!');
// });

//Exercise 2
let para = document.getElementById('textOne');

function textChange() {
  para.innerText = 'You clicked the button!';
}

//Exercise 3
//img 1
const img1 = document.getElementById('img1');
const image1Replacement = 'https://images.unsplash.com/photo-1736779580644-6b4268af4642?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

//img 2
const img2 = document.getElementById('img2');
const image2Replacement = 'https://images.unsplash.com/photo-1736779580644-6b4268af4642?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

//Button 1
function image1Change() {
  img1.src = image1Replacement;
}

//Button 2
function image2Change() {
  img2.src = image2Replacement;
}

function change() {
  let typingValue = document.getElementById('text-box').value;
  let pTag = document.getElementById('pTag');
  console.log(pTag);
  pTag.textContent += typingValue;
  console.log(typingValue);
}

let display = document.getElementById('countdown');
let interval;
display.textContent = 10;
function startTimer() {
  let myInterval = setInterval(() => {
    interval = myInterval;
    if (display.textContent > 0) {
      display.textContent -= 1;
      console.log(typeof display.textContent);
    } else {
      clearInterval(myInterval);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  display.textContent = 10;
}
