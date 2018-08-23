// Função sem parâmetro
function somar (){

    let v1=2, 
        v2=3, 
        soma;

    soma = v1 + v2;

    console.log(soma);
}

somar();

// Função com parâmetro
function subtrair (n1,n2){

    let sub = n1 - n2;
    console.log(sub);

}

subtrair (5,3);

// Função sem parâmetro com retorno
function dividir (){

    let v1=4, 
        v2=2, 
        div;

    div = v1/v2;

    return div;
}

console.log(dividir());

// Função com parâmetro com retorno
function multiplicar (n1,n2){

    let mult = n1*n2;

    return mult;
}

console.log(multiplicar (6,3));
