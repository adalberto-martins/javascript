function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
       
      
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 6 && hora <= 12) {
        // BOM DIA!
        saudacao.innerHTML = 'BOM DIA!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffdfb2'
    }else if (hora >= 12 && hora <= 17) {
        // BOA TARDE!
        saudacao.innerHTML = 'BOA TARDE!'
        img.src = 'fototarde.png'
        document.body.style.background = '#c4816e'        
    }else  {
        // BOA NOITE!
        saudacao.innerHTML = 'BOA NOITE!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#60a2b2'
    }

    }

    

