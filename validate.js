function validateCredentials(username,password){
    const validated=validateUsername(username);
    if(validated==false){
        return"Sorry not verified";
    }

    const validPassword=validatePaasword(password);
    if(validPassword==true){
        return"Verified";
    }else{
        return "Sorry not verified";
    }
}