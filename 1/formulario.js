console.log('hola');

const expresiones = {
    nombre: /^[A-Za-z]/,
    apellido: /^[A-Za-z]/,
    correo: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    comentario: /.{500}/
}

const nombre = document.getElementById('nombre');
const apellido= document.getElementById('apellido');
const correo=document.getElementById('email');
const comentarios=document.getElementById('comentarios');
const form=document.getElementById('formulario');

let nom, ap, cor, com =false;

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(nombre.value.lenght!=0 && (expresiones.nombre.test(nombre.value))){
        nom=true;
    }
    else{
        alert('Nombre no valido');
        nom=false;
    }
    if(apellido.value.lenght!=0 && (expresiones.apellido.test(apellido.value))){
        ap=true;
    }
    else{
        alert('Apellido no valido');
        ap=false;
    }
    if(nombre.value.lenght!=0 && (expresiones.correo.test(correo.value))){
        cor=true;
    }
    else{
        alert('Correo electronico no valido');
        cor=false;
    }
    if(comentarios.value.lenght>500){
        alert('Los comentarios no pueden exceder los 500 caracteres');
        com=false;  
    }
    else{
        com=true;
    }
    if (nom&&ap&&cor&&com ==true){
        alert('Formulario enviado exitosamente')
        nom, ap, cor, com =false;
        formulario.reset();
    }
    
})



