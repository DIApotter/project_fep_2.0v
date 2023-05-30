const button = document.querySelector('.upload-button button');

button.addEventListener('click', openDialog);

function openDialog() {
  document.getElementById('uploadfile').click();
}

const input = document.getElementById('uploadfile');
const image = document.getElementById('image');

input.addEventListener('change', function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    image.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

const power = document.querySelector('.ac1234');
power.addEventListener('click', function() {
  power.style.boxShadow = "0px 0px 0px 0px #979797";
  power.style.color = "rgb(88, 88, 88)";
  power.style.transition = "transition: 0.5s";

  init()

});

const logo = document.querySelector('.title');
logo.addEventListener('click', function() {
  window.location.href = 'main.html';

});