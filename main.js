document.getElementById('checkin-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let name = document.getElementById('name').value;
  let dni = document.getElementById('dni').value;

  fetch('https://<tu-repl-id>.repl.co/api/checkin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, dni })
  })
  .then(response => response.json())
  .then(data => {
    if(data.success) {
      window.location.href = '/activities';
    } else {
      alert('Error en el check-in');
    }
  });
});
