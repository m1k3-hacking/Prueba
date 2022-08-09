function reloj() {
    //Obtenemos el valor del tiempo
    momentoActual = new Date()
    // defnimos nuestras variables para obtener por separado el tiempo
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    // unificamos los valores en un mismo valor imprimible
    var horaImprimible = hora + " : " + minuto + " : " + segundo

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora
    // mostraremos en el documento el valor imprimible
    document.form_reloj.reloj.value = horaImprimible
    //Aqui haremos que se actualize automaticamente
    setTimeout("reloj()",1000)

}