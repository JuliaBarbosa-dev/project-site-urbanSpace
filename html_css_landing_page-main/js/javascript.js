function saveData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var interest = document.getElementById("interest").value;
    console.log("name: " + name);
    console.log("Email: " + email);
    console.log("phone: " + phone);
    console.log("interest: " + interest);

    alert('Inscrição realizada com sucesso.');
}

function register(){
    alert('Faça sua inscrição preenchendo o formulário acima.')
}