alert("Bienvenidos!");


function actual() {
         fecha=new Date(); //Actualizar fecha.
         hora=fecha.getHours(); //hora actual
         minuto=fecha.getMinutes(); //minuto actual
         segundo=fecha.getSeconds(); //segundo actual
         if (hora<10) { //dos cifras para la hora
             hora="0"+hora;
             }
         if (minuto<10) { //dos cifras para el minuto
             minuto="0"+minuto;
             }
         if (segundo<10) { //dos cifras para el segundo
             segundo="0"+segundo;
             }
         //devolver los datos:
         mireloj = hora+" : "+minuto+" : "+segundo;	
         return mireloj; 
         }

function actualizar() { //función del temporizador
   mihora=actual(); //recoger hora actual
   mireloj=document.getElementById("reloj"); //buscar elemento reloj
   mireloj.innerHTML=mihora; //incluir hora en elemento
	 }
setInterval(actualizar,1000); //iniciar temporizador




function ver(n) {
         document.getElementById("subseccion"+n).style.display="block"
         }
function ocultar(n) {
         document.getElementById("subseccion"+n).style.display="none"
         }





function calcularTotal(){
   var monto=Number(document.getElementById("monto").value);
   var igv=Number(document.getElementById("igv").value);
   var total = monto-(monto*(igv/100));
  //escribir el código para calcular el igv a partir del monto, y sumarlo al monto 
	

   document.getElementById("calcularTotal").innerHTML = "El impuesto a pagar es:" + total;


}



function myFunction1() {
document.getElementById("demo").innerHTML="Lamentamos su mala experiecia aquí :C. A continuación podrá escribir su queja y/o sugerencia";

}






