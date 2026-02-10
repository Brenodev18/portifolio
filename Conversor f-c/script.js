let celscius = document.getElementById("c").value

if (celscius = true){
    function conversor() {

    let SomTemp = document.getElementById("temp").value
    let SomResult = ((SomTemp *1.8 ) + 32)
    let resultado = document.getElementById("resultado")
    let Box = document.getElementById("C")


    resultado.innerHTML = SomResult
}

if(celscius = false){
    resultado.innerHTML = "s"
}

}
