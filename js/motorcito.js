 var estadoLicuadora="apagada";
 var licuadora=document.getElementById("blender");
 var musicLicuadora=document.getElementById("blender-sound");
 var buttonLicuadora=document.getElementById("blender-button-sound");

function controlarLicuadora(){
    if(estadoLicuadora=="apagada"){
        estadoLicuadora="encendida";
        musicadeLicuadora();
        licuadora.classList.add("active")
        //console.log("me prendiste");
        
    }else{
        estadoLicuadora="apagada";
        musicadeLicuadora();
        licuadora.classList.remove("active");
        //console.log("me apagaste");
        
    }
    
}

function musicadeLicuadora(){
    if(musicLicuadora.paused){
        buttonLicuadora.play();
        musicLicuadora.play();
    }else{
        buttonLicuadora.play();
        musicLicuadora.pause();
        musicLicuadora.currentTime=0;
    }
}