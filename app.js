function encryptedCaesar(){
	do{  
		 // Una vez ingresada la frase, le dará dos opciones, cifrar o descifrar la frase
		var answer = prompt("Indique la opcion que quiere para su frase: 1)Cifrada - 2)Descifrada");
		 // El if debe ser distinto a "vacio"	
		if(answer !=""){
			// Si la respuesta es la opcion 1, le dará la frase cifrada
			if(answer =="1"){
				cipher();
				//En cambio si la respuesta es la opción 2, se la dará descifrada
				}else if(answer =="2"){
					descipher();
					
					}else {
				    //Si no ingresa ninguna de las dos opciones dadas, le arrojará un "alert"  
					alert("No ingrese una frase vacía o con números");
			}
		} 
	}while (answer =="" || (answer != "1" && answer != "2"));//Se volvera a preguntar si la respuesta es vacia o si no es 1 o 2
}
//En esta funcion veremos si la frase ingresada esta en letras para poder cifrar 
function cipher(){
	do{
		    var answer1 = prompt("Ingresa una frase");
            var ver1 = /[A-z\s]/;
            // Asegurar de que no sean distintos a verificador
            if(ver1.test(answer1)==true){
            	cesarCipher();
             
            }else{ // si no lo es, le arroja error
             alert("Asegurese de que lo escrito sea letras y sin números");
        }
    }while(answer1 == "" || answer1 == null); //se le volvera a preguntar si arroja error      
}
// esta funcion es para ver si la opcion 1 ingresada cumple con el codigo del cifrado cesar y respeta a mayusculas y minusculas
function cesarCipher(){
var resultado =[];
var ver1=[];

	for (var i = 0; i <ver1.length; i++){
		resultCipher.push(([i] - 33 + 26) % 26);
		alert(resultCipher);
		if((ver1[i] >= 65 && ver1[i] < 90) || (ver1[i] >= 97 && ver1[i] < 122)){ 
		ver1[i]++;
		}
	}
}
// En esta funcion veremos si la frase ingresada esta en letras para poder descifrar		 
function desCipher(){
	do{
			var answer2 = prompt("Ingrese una frase");
			var ver2 = /[A-z\s]/;
			// Asegurar de que no sean distintos a verificador
			if(ver2.test(answer2)==true){
				cesarDesCipher();
				
			}else{// si no lo es, le arroja error
                 alert("Asegurese de que lo escrito sea letras y sin números");
			}
	}while(answer2 == "" || answer1 == null); //se le volvera a preguntar si arroja error
}
    
// esta funcion es para ver si la opcion 2 ingresada cumple con el codigo del cifrado cesar y respeta a mayusculas y minusculas
function cesarDesCipher(){
var resultado =[];
var ver2=[];
	
	for (var j = 0; j <ver2.length; i++){
		resultDesCipher.push((([j] - 33) + 26) % 26 + 65);
		alert(resultDesCipher);
		if((ver2[i] >=65 && ver2[i] <90) || (ver2[i] >=97 && ver2[i] <122)){
		ver2[i]++;
		}
	}
}
	

encryptedCaesar();
