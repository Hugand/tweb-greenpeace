const modalBg = $("#modal > #modal-bg")

$("#form").submit(function(event){
    event.preventDefault()

    const formData = parseFormData(this)

    alert(`
        Nome: ${formData.nome}\n
        NIF: ${formData.nif}   Sexo: ${formData.sexo}\n
        Idade: ${formData.idade}\n
        Email: ${formData.email}\n
        Morada: ${formData.morada}\n
        Codigo-postal: ${formData.codPostal}   Localidade: ${formData.localidade}\n
        Motivo: ${formData.motivo}
    `)
})

function parseFormData(form){
    let parsedData = {}

    for(let i = 0; i < form.length; i++){
        parsedData[form[i].name] = form[i].value
    }

    return parsedData
}