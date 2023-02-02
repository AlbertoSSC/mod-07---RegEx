console.log("=============IBAN===============");

//____________VALIDAR IBAN_____________

//caso 1. Validar que se informa con dos letras y los números correspondientes:
var iban1 = "ES6600190020961234567890";
var pattern = /^[A-Z]{2}\d{22}$/i;
console.log("RegExp1: " + pattern.test(iban1));

//caso 2. Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
var iban2 = "ES66 0019 0020 9612 3456 7890";
var iban22 = "ES6600190020961234567890";
var pattern2 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/i;
console.log("RegExp2: " + pattern2.test(iban2));
console.log("RegExp22: " + pattern2.test(iban22));

//caso 3. Vamos a extraer el código de páis y el dígito de control.
var iban3 = "ES66 0019 0020 9612 3456 7890";
var pattern3 = /^([A-Z]{2})(\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/i;
console.log("RegExp3: " + pattern3.test(iban3));
console.log("RegExp33: " + pattern3.exec(iban3));


console.log("\n", "============MATRÍCULA================");


//____________VALIDAR MATRÍCULA___________

//Caso 1. Validar una matrícula de coche moderna,
//esta compuesta por 4 digitos y tres letras, patrones a validar:
//2021 GMD      2345-GMD       4532BDB      0320-AAA

var matriculas = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
var pattern4 = /^(\d{4})(\s|-)?([A-Z]{3})$/;

matriculas.forEach(value =>
    console.log("¿La matrícula " + value + " es válida? " + pattern4.test(value)));

//Caso 2. Extraer por un lado la parte numérica y por otro las letras.

matriculas.forEach(value =>
    console.log("Matrícula: " + pattern4.exec(value)));


console.log("\n", "=========EXTARE IMG HTML==============");


//____________EXTRAER IMÁGENES DE UN FICHERO HTML__________

//Caso 1 . De una sola linea extraer el contenido de src.

var extract =
    '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';
var pattern5 = /".{7,}\.[a-z]{3,4}"/;
console.log("contenido de img src: " + extract.match(pattern5));

console.log("---------------");

//Caso 2. De un HTML extraer todos los src de todos los objetos img.

var myImages = `<html>
  <body>
    <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
    <h1>ejemplo</h1>
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
  </body >
</html >`;
var pattern7 = /"https.{7,}\.(jpg|jpeg|gif|png)"/gim;
console.log("Contenido de img src: " + pattern7.exec(myImages));
console.log("Contenido de img src: " + myImages.match(pattern7));


console.log("\n", "==========VALIDAR TARJETA=============");


//__________VALIDAR SINTAXIS TARJETA DE CRÉDITO__________

//Que una máster card tiene una longitud de 16 caracteres (numeros).
//Que tiene que empezar con 50,51,52,53,54,55.
//Qué lo normal es que se agrupen en conjuntos de 4 digitos.

//Caso 1. Vamos a validar los siguiente formatos
// 5299 6400 0000 0000     5299-6400-000-000      5299 6400 0000 0000

var masterCard = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];
var patternCard = /(50|51|52|53|54|55)\d{2}(\-|\s)?(\d{4}(\-|\s)?){2}\d{4}/;
masterCard.forEach(value =>
    console.log("Es válido el num. de tarjeta: " + patternCard.test(value)));

//Caso 2. Vamos a extraer cada grupo de cuatro digitos
var patternCard2 = /((50|51|52|53|54|55)\d{2})\-?\s?(\d{4})\-?\s?(\d{4})\-?\s?(\d{4})/;
masterCard.forEach(value =>
    console.log("Num.: " + patternCard2.exec(value)));


console.log("\n", "==========BUSCAR REGEX=================")


//__________BUSCAR ESPRESIONES REGULARES___________

//Comprobar si una clave es fuerte o no:
//    Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un numero y un caracter especial.
//    Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.
var passwordComplex = "TestiNg193!";
var patternPassComplex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/;
console.log("¿Es compleja la clave?--> " + patternPassComplex.test(passwordComplex));

var passwordMod = "TestiNg193";
var patternPassMod = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
console.log("¿Es moderada la clave?--> " + patternPassMod.test(passwordMod), "/// ¿Y es compleja?--> " + patternPassComplex.test(passwordMod));

//Validar que una URL esta bien formada
//(por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).

var okUrlForm = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net"];
var patternUrl = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/;
okUrlForm.forEach(value =>
    console.log("¿URL es correcta?--> " + patternUrl.test(value)));


//Validar que un color en Hexadecimal esta bien formado.

var hexaColor = ["#FFA", "FFA", "ffa", "23AFEF", "23aff"];
var patternHex = /#?([\dA-F]{6}|[\dA-F]{3})/i;
hexaColor.forEach(value =>
    console.log("¿Color Hexadecimal válido?--> " + patternHex.test(value)));