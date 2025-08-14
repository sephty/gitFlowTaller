document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  document.getElementById('formOutput').textContent = 'Nombre: ' + name + ', Email: ' + email;
});