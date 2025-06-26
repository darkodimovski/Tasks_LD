const correctOrder = ['wipes', 'cream', 'diaper'];
let currentStep = 0;

function selectItem(item) {
  const message = document.getElementById('message');

  if (item === correctOrder[currentStep]) {
    currentStep++;
    if (currentStep === correctOrder.length) {
      message.innerText = "✅ Success! You're a diaper ninja!";
      currentStep = 0;
    }
  } else {
    message.innerText = "💩 Oops! Baby is not happy!";
    currentStep = 0;
  }
}
