let numbers = [];

let positivos = 0;
let negativos = 0;
let ceros = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positivos++;
  } else if (numbers[i] < 0) {
    negativos++;
  } else {
    ceros++;
  }
}

document.getElementById('formArray').addEventListener('submit', function(event) {
  event.preventDefault();

  const numbers = document.querySelectorAll('input[type="number"]');
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].value = '';
  } 

  console.log(`Positivos: ${positivos}`);
  console.log(`Negativos: ${negativos}`);
  console.log(`Ceros: ${ceros}`);
});
