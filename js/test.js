

function verif(){

    var name =  form.name.value;
    var lastname =  form.lastname.value;
    var email =  form.email.value;
    var budget =  form.budget.value;
    var phone =  form.phone.value;
    var organization =  form.organization.value;
    var message =  form.message.value;
    

    // verification de nom

    vn=0;
    erreurnom=false;

    if (name.length == 0){
        alert("saisir votre nom");
    }
    else {
        do{
            if((name.charAt(vn).toUpperCase()<"A") || (name.charAt(vn).toUpperCase()>"Z"))
      
                {
                    erreurnom = true;
                }
                else {
                    vn++;
                }
       
        }while((erreurnom == false) && (vn < name.length));
    
        if( erreurnom == true )
        {
            alert("le nom doit etre alphabetique");
        }
    }
 



    
    // verification de prenom

    vp=0;
    erreurprenom=false;

    if (lastname.length == 0){
        alert("saisir votre prenom");
    }
    else {
        do{
            if((lastname.charAt(vp).toUpperCase()<"A") || (lastname.charAt(vp).toUpperCase()>"Z"))
      
                {
                    erreurprenom = true;
                }
                else {
                    vp++;
                }
       
        }while((erreurprenom == false) && (vp < lastname.length));
    
        if( erreurprenom == true )
        {
            alert("le prenom doit etre alphabetique");
        }
    }


// email

    if (email.length > 0){
        if (email.indexOf("@")== -1) 
        {
            alert("l'email doit contient un @");
        }
    }
else {
    alert("il faut saisir un email");
}


// verification de budget


if (budget.length > 0){
    if (isNaN(budget) == true){
        alert("le budget doit etre numerique")
    }
    
}
else {
    alert("il faut siair une budget")
}




// verification de phone


if (phone.length == 8){
    if (isNaN(budget) == true){
        alert("le numero de telephone doit etre numerique")
    }
    
}
else if(phone.length == 0 ) {
    alert("il faut siair un numero de telephone")
}


else{
    alert("il faut siair un numero de telephone de 8 chiffre")
}




// verification de message

if (message.length == 0) {
    alert("il faut saisir un message de contact")
}




// verification de l'organisation

if (organization.length == 0) {
    alert("il faut saisir le nom de votre organization")
}






}