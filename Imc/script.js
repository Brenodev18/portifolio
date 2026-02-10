
function imc(){

    let nome = document.getElementById("name").value
    let alt = document.getElementById("altura").value
    let pes = document.getElementById("peso").value

    let resF = (pes/(alt**2))

    result.innerHTML = ` A  taxa de imc de ${nome} é ${resF.toFixed(1)}`


}