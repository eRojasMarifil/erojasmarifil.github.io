const InputTexto = document.querySelector(".aEncriptar");
const Mensaje = document.querySelector(".bloqueEncriptado");

function BotonEncrip(){
    const TextoEncrip =Encrip(InputTexto.value);
    Mensaje.value = TextoEncrip;
}

function Encrip(StringEncrip){
    let MatrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringEncrip = StringEncrip.toLowerCase();
    for(let i=0; i<MatrizCodigo.length; i++){
        if(StringEncrip.includes(MatrizCodigo[i][0])){
            StringEncrip = StringEncrip.replaceAll(MatrizCodigo[i][0],MatrizCodigo[i][1]);            
        }
    }
    return StringEncrip;
}

function BotonDesEncrip(){
    const TextoEncrip = DesEncrip(InputTexto.value);
    Mensaje.value = TextoEncrip;
}

function DesEncrip(StringEncrip){
    let MatrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    StringEncrip = StringEncrip.toLowerCase();
    for(let i=0; i<MatrizCodigo.length; i++){
        if(StringEncrip.includes(MatrizCodigo[i][0])){
            StringEncrip = StringEncrip.replaceAll(MatrizCodigo[i][0],MatrizCodigo[i][1]);            
        }
    }
    return StringEncrip;
}
function BotonCopiar(){
    var MensajeAcopiar = document.getElementById('desencrip');
    MensajeAcopiar.select();
    document.execCommand('copy');
    alert("¡Copiado! :)")
}