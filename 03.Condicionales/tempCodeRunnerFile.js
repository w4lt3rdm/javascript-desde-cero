function vocales(char){
    // Se pasaran varias letras por parámetros, tendrás que comprobar que sea una vocal y retornar el siguiente
    // mensaje "Es vocal"
    // Tu código:👇
    let vocales = "aeiouAEIOU"
    //return ("aeiouAEIOU".indexOf(x) != -1);
    console.log(vocales.indexOf(char) != -1)
    let devolver  = vocales.indexOf(char) != -1
    //if ((vocales.indexOf(char) != -1)) return "Es vocal"
    //return "no es vocal"
    if (vocales.indexOf(char) != -1) return "Es vocal"
    return "no Es vocal"
    
}
vocales("b")