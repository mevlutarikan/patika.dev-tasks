const myName = document.querySelector('#myName');
const myClock = document.querySelector('#myClock');

function showTime() {
  let date = new Date();
  myClock.innerHTML =
    date.toLocaleTimeString('tr-TR') + ' ' + date.toLocaleDateString('tr-TR', { weekday: 'long' });
}

setInterval(showTime, 1000);
let fName = '';
while (fName.length < 2) {
  fName = prompt('Lütfen isminizi giriniz :');
}
myName.innerHTML = fName;
