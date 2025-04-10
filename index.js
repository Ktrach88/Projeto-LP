var SetaDireita = window.document.getElementById("seta-esquerda")
var bruna = window.document.getElementById("bruna")
var leo = window.document.getElementById("leo")
var sam = window.document.getElementById("sam")
var SetaEsquerda = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    SetaDireita.style = "display:flex"
    leo.style = "display:none"
    bruna.style = "display:flex"
    SetaEsquerda.style = "display:none"
}
function RolarParaEsquerda(){
    SetaDireita.style = "display:none"
    bruna.style = "display:none"
    leo.style = "display:flex"
    SetaEsquerda.style = "display:flex"
}