let hamburguer=document.querySelector(".hamburguer")
const bar=[...document.getElementsByClassName("bar")]
let menu=document.querySelector('.menu')
let iconeTemas=document.querySelector('.iconeTemas')
let body=document.querySelector('.body')
let janela=document.querySelector('.janela')
let h1=document.getElementsByTagName('h1')
let h3=document.getElementsByTagName('h3')

class Tema{
    constructor(corBody, corIcone){
        this.corBody=corBody
        this.corIcone=corIcone
    }
    ativar=()=>{
        body.style.background = this.corBody
        iconeTemas.style.background=this.corIcone

    }
}

const temaEscuro=new Tema('#111729','write')
const temaClaro=new Tema('white','#111729')

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('ativo')
    if(hamburguer.classList.contains('ativo')){
    menu.style.display='flex'
    menu.style.flexDirection='column'
    iconeTemas.style.display='flex'
    janela.style.height='100%'
    janela.style.backgroundColor='white'
    }else{
        menu.style.display='none'
        iconeTemas.style.display='none'
        janela.style.height=''
        janela.style.backgroundColor=''
    }
})

iconeTemas.addEventListener('click',()=>{
    h1[0].classList.toggle('h1h3TemaEscuro')
    h3[0].classList.toggle('h1h3TemaEscuro')
    if(body.style.backgroundColor=="rgb(17, 23, 41)"){
        temaClaro.ativar()
    }else{temaEscuro.ativar()}
    
})