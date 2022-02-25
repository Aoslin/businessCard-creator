/*Função de mudança de cor background*/ 
function changeColor(){
    var color = document.getElementById("pick-color").value
    document.getElementById("verm").style.backgroundColor = color
}

/*Funções dados pessoais*/
function escreverNome(){
    var inp = document.getElementById("nome").value
    document.getElementById("nome-cv").innerHTML = "Nome: " + inp
}

function escreverEmail(){
    var inp = document.getElementById("email").value
    document.getElementById("email-cv").innerHTML = "Email: " + inp
}

function escreverSite(){
    var inp = document.getElementById("site").value
    document.getElementById("site-cv").innerHTML = "Site: " + inp
}

function escreverDescricao(){
    var inp = document.getElementById("descricao").value
    document.getElementById("descricao-cv").innerHTML = inp
}

function escreverTelefone(){
    var inp = document.getElementById("telefone").value
    document.getElementById("telefone-cv").innerHTML = "Telefone: " + inp
}

function limpar(){
    var nome = document.getElementById("nome-cv")
    while(nome.firstChild){
        nome.removeChild(nome.firstChild)
    }

    var email = document.getElementById("email-cv")
    while(email.firstChild){
        email.removeChild(email.firstChild)
    }

    var site = document.getElementById("site-cv")
    while(site.firstChild){
        site.removeChild(site.firstChild)
    }

    var telefone = document.getElementById("telefone-cv")
    while(telefone.firstChild){
        telefone.removeChild(telefone.firstChild)
    }

    var descricao = document.getElementById("descricao-cv")
    while(descricao.firstChild){
        descricao.removeChild(descricao.firstChild)
    }
}
/*Funções dados pessoais*/

/*Funções para mudar background e tamanho*/
function changeBg(){
    var changeBg = document.getElementById("verm")
    changeBg.style.backgroundImage = `url("./BGs/backgorund.png")`
    
}

function changeBg1(){
    var changeBg = document.getElementById("verm")
    changeBg.style.backgroundImage = `url("./BGs/fundo-aquarela-pintado-a-mao-com-forma-de-ceu-e-nuvens_24972-1095.webp")`
    
}

function changeBg2(){
    var changeBg = document.getElementById("verm")
    changeBg.style.backgroundImage = `url("./BGs/istockphoto-952039286-170667a.jpg")`
    
}

function changeBg3(){
    var changeBg = document.getElementById("verm")
    changeBg.style.backgroundImage = `url("./BGs/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg")`
    
}

function changeBg4(){
    var changeBg = document.getElementById("verm")
    changeBg.style.backgroundImage = `url("./BGs/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")`
    
}

function changeBg5(){
    var changeBg = document.getElementById("verm")
    changeBg.style.backgroundImage = `url("./BGs/white-gold-geometric-pattern-background-vector_53876-140726.webp")`
    
}

function changeSize(){
    var altura = document.getElementById("altura").value
    var largura = document.getElementById("largura").value
    document.getElementById("verm").style.width = largura + "px"
    document.getElementById("verm").style.height = altura + "px"
}
/*Funções para mudar background e tamanho*/

function selectFontSize(){
    var fontSizeNome = document.getElementById("size-font").value
    document.getElementById("nome-cv").style.fontSize = fontSizeNome + "px"

    var fontSizeEmail = document.getElementById("size-font").value
    document.getElementById("email-cv").style.fontSize = fontSizeEmail + "px"

    var fontSizeTelefone = document.getElementById("size-font").value
    document.getElementById("telefone-cv").style.fontSize = fontSizeTelefone + "px"

    var fontSizeDescricao = document.getElementById("size-font").value
    document.getElementById("descricao-cv").style.fontSize = fontSizeDescricao + "px"

    var fontSizeSite = document.getElementById("size-font").value
    document.getElementById("site-cv").style.fontSize = fontSizeSite + "px"
}

function selectFont(){
    var fontFamilyNome = document.getElementById("select-font").value
    document.getElementById("nome-cv").style.fontFamily = fontFamilyNome

    var fontFamilyEmail = document.getElementById("select-font").value
    document.getElementById("email-cv").style.fontFamily = fontFamilyEmail

    var fontFamilyTelefone = document.getElementById("select-font").value
    document.getElementById("telefone-cv").style.fontFamily = fontFamilyTelefone

    var fontFamilyDescricao = document.getElementById("select-font").value
    document.getElementById("descricao-cv").style.fontFamily = fontFamilyDescricao

    var fontFamilySite = document.getElementById("select-font").value
    document.getElementById("site-cv").style.fontFamily = fontFamilySite
}

function changeFontColor(){
    var changeColor = document.getElementById("pick-fontColor").value
    document.getElementById("verm").style.color = changeColor
}


function alinharEsq(){
    var txt1 = document.getElementById("verm")
    txt1.style.alignItems = "flex-start"
}

function alinharCen(){
    var txt2 = document.getElementById("verm")
    txt2.style.alignItems = "center"
}

function alinharDir(){
    var txt3 = document.getElementById("verm")
    txt3.style.alignItems = "flex-end"
}


function removeBg(){
    var bg = document.getElementById("verm")
    bg.style.backgroundImage = "none"
}