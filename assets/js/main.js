let email = document.getElementById('email')
let password = document.getElementById('pwd')

function validarEmail(){
    usuario = email.value.substring(0, email.value.indexOf("@"))
    dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length)


    if((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)){
        return true
    }else{
        return false
    }
}

function validarSenha(){
    if(password.value.length < 6){
        return false
    }else{
        return true
    }
}

function validar(){
    if(validarEmail()){
        if(validarSenha()){
            $('.sucess').removeClass("hide")
            $('.sucess').addClass("show")
            $('.sucess').addClass("showAlert")
            setTimeout(function(){
                $('.sucess').addClass("hide")
                $('.sucess').removeClass("show")
            }, 5000)
        }else{
            password.style.borderColor = '#FF5757'
            password.style.backgroundImage = 'url(/assets/images/invalid-password.svg)'
            $('.password').removeClass("hide")
            $('.password').addClass("show")
            $('.password').addClass("showAlert")
            setTimeout(function(){
                $('.password').addClass("hide")
                $('.password').removeClass("show")
            }, 5000)
        }
    }else{
        email.style.borderColor = '#FF5757'
        email.style.backgroundImage = 'url(/assets/images/invalid-email.svg)'
        $('.email').removeClass("hide")
        $('.email').addClass("show")
        $('.email').addClass("showAlert")
        setTimeout(function(){
            $('.email').addClass("hide")
            $('.email').removeClass("show")
        }, 5000)
    }
}

function returnToNormal1(){
    email.style.borderColor = '#FFF'
    email.style.backgroundImage = 'url(/assets/images/email.svg)'
}

function returnToNormal2(){
    password.style.borderColor = '#FFF'
    password.style.backgroundImage = 'url(/assets/images/password.svg)'
}

let load = document.getElementById('load')

$('.close-btn').click(function(){
    $('.alert').addClass("hide")
    $('.alert').removeClass("show")
})

setTimeout(function(){
    $('.load').css('opacity', '0')
}, 2000)
setTimeout(function(){
    $('.load').css('display', 'none')
}, 3000);
