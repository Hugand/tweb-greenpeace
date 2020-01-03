console.log("dnsjdsdj")

const correctEmail = "admin@greenpeace.com"
const correctPassword = "greenpeace123"

$("#login-form").submit(function(event){
    event.preventDefault()
    
    if($("#email").val() === correctEmail && $("#password").val() === correctPassword){
        //console.log("LOGED INNN")
        window.location.href = "user-loged-in.html"
    }else{
        alert("Login falhou. Verifique se os seus dados estão corretos")
    }

})

$("#register-form").submit(function(event){
    event.preventDefault()

    const name = this[0]
    const password = this[1]
    const confirmPassword = this[2]

    if(password.value === confirmPassword.value){
        alert(`
            Email: ${name.value}\n
            Password: ${password.value}
        `)
    }else
        alert("As passwords não são iguais")
})