function calcular() {
    var base = Number(document.getElementById('base').value);
    var exponente = Number(document.getElementById('exponente').value);
    var resultado = document.getElementById('resultado');
    var inicio = 0;
    var inicio2 = 1;
    var sumaInterna = base;
    var baseInicial = base;
    while (inicio < exponente - 1) {
        inicio2 = 1;
        while (inicio2 < base) {
            sumaInterna = sumaInterna + baseInicial;
            inicio2++;
        }
        baseInicial = sumaInterna;
        inicio++;
    }
    resultado.value = (sumaInterna).toString();
}

function acumular(){
    var resultado = Number(document.getElementById('resultado').value);
    var acumulado = Number(document.getElementById('acumulado').value);
    var acum = document.getElementById('acumulado');
    var suma = resultado + acumulado;
    acum.value = suma;
}
