document.getElementById('btnInscrever').addEventListener('click', function(event) {
    event.preventDefault();
    var email = document.getElementById('inputEmail4').value;
    alert("Esse é seu e-mail: " + email);
});
