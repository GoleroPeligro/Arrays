//Sistema de ingreso de estudiantes y nota
//Devuelve un alert con la lista de nombres y nota y si aprobo o no


//--------Declaracion de variables y array-------
let nomEstudiante = prompt("Ingrese el nombre del/la estudiante");
let nota;
let lista = "";
const datosEst = [];

//-------Creacion de la clsae Estudiantes--------
class Estudiantes {
    constructor(estudiante, nota) {
        this.estudiante = estudiante;
        this.nota = nota;
    }
}

//--------Comprobar que los datos se ingresan correctamente y pusha los datos en el array-------
while (nomEstudiante != "ESC") {
    if (nomEstudiante !== "") {
        nota = Number(prompt("Ingrese la nota de " + nomEstudiante));
        if (nota === 0 || nota > 10) {
            nota = Number(prompt("La nota debe tener un valor entre 1 y 10"));
        } else {
            datosEst.push(new Estudiantes(nomEstudiante, nota));
            nomEstudiante = prompt("Ingrese el nombre del/la estudiante o ESC para salir");
        }
    } else {
        nomEstudiante = prompt("Debe ingresar el nombre del estudiante para continuar o ESC para salir");
    }
}

//--------Recorre el array y crea un mensaje dependiendo de la nota (si aprueba o no)--------
for (const info of datosEst) {
    if (info.nota <= 5) {
        lista += info.estudiante + " REPROBÓ con " + info.nota + "\n";
    } else {
        lista += info.estudiante + " APROBÓ con " + info.nota + "\n";
    }
}

//-------Un alert con la lista de estudiantes, su nota y si aprobaron o no--------
alert(lista);