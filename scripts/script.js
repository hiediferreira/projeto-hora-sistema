let agora = new Date()
let hora = agora.getHours()
let minuto = agora.getMinutes()
//let minuto = 10
//let hora = 13

function mostrarHora() {
    let msg = document.querySelector('div#hora')
    if (minuto < 10) {
        msg.innerHTML +=  `${hora}:0${minuto}`
    } else {
        msg.innerHTML +=  `${hora}:${minuto}` 
    }         
}

function estilizar(){
    let img = document.getElementById('imagem')    
    if (hora < 12 ){
        document.querySelector('body').style.backgroundColor = '#dfb953'
        img.src = 'imagens/cafe2.jpg'
    } else if (hora < 18) {
        document.querySelector('body').style.backgroundColor = '#60b3c0'
        img.src = 'imagens/tarde.jpg'    
    } else {
        document.querySelector('body').style.backgroundColor = 'rgb(43, 21, 6)'
        img.src = 'imagens/por-do-sol.jpg'
    }
}
