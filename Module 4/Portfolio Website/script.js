function showDate() {
  const now = new Date();
  document.getElementById('dateTime').textContent = now.toString();
}

function addNumbers() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const sum = num1 + num2;
  document.getElementById('result').textContent = 'Result: ' + sum;
}

function changeColor() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
}