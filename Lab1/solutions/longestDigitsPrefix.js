function longestDigitsPrefix(Palabra){
    var StrLarg = "";
    var aux=0;
    var Letra="";
    var max=0;
    var StrMax="";
    for (var i=0;i<Palabra.length+1;i++){
        letra=Palabra.charAt(i);
        numero=parseInt(letra);
        if (letra==numero){
            StrLarg=StrLarg+letra;
            aux++;
        }
        if (letra!=numero){
            if (aux>max) {
                max=aux;
                StrMax=StrLarg;
            }
            aux=0;
        }

    }
    return StrMax;
}

console.log(longestDigitsPrefix("123abc12342"));