async function fnConsultarCep(){

    const CEP = '13466321'

    const resposta = await fetch(`http://viacep.com.br/ws/${CEP}/json/`, { method: "GET" })
    const data = await resposta.json()
    // console.log(data)

    console.log("==========================================================")
    console.log(`Cep: ${data.cep}`)
    console.log(`Rua: ${data.logradouro}`)
    console.log(`Bairro: ${data.bairro}`)
    console.log(`Cidade: ${data.localidade}`)
    console.log(`Estado: ${data.estado}`)
    console.log("==========================================================")
}

fnConsultarCep()