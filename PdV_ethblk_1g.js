let arrastrePag, salidaPag, vueltaPag, trancisionPag, salteoPagAtras, zoomPag, salvarPag; // booleans

let t; // boolean

// int

const angTrama = 18.435;

let colorFondo, fRojo, fVerde, fAzul;

let cantColumnas, factorCrecimientoCartel, velocidadTrancision; // int

let caracterTest;
let largoSegTest, rojoTest, verdeTest, azulTest;

let cartelTest;

let cantColumnasTest;

let array1Test = [];

let relacTamPag;

let cartelA, cartelB;


function preload() {

}

function setup() {

    createCanvas(850, 850);
//    createCanvas(2500, 2500);

    //    colorMode(RGB, 255);

    relacTamPag = (width * 1.0) / height;

    let probColorModeFdo = random(1);

//    if (probColorModeFdo < 0.5) {
//        colorFondo = 255;
//    } else if (probColorModeFdo < 0.85) {
//        colorFondo = 0;
//    } else {
//        fRojo = (float((int(random(3)) + 1)) / 4) * 255;
//        fVerde = (float((int(random(3)) + 1)) / 4) * 255;
//        fAzul = (float((int(random(3)) + 1)) / 4) * 255;
//
//        colorFondo = color(fRojo, fVerde, fAzul);
//    }

    if (probColorModeFdo < 0.666) {
        colorFondo = 255;
    } else {
        colorFondo = 0;
    } 
    
    
    background(colorFondo);

    angleMode(DEGREES); // Change the mode to DEGREES

    //    largoSegTest = random(5, 15);
    //    console.log("largoSegTest: "+largoSegTest);

    //    rojoTest = (float((int(random(3)) + 1)) / 4) * 255;
    //    verdeTest = (float((int(random(3)) + 1)) / 4) * 255;
    //    azulTest = (float((int(random(3)) + 1)) / 4) * 255;
    //    console.log("azulTest: " + azulTest);

    //    cantColumnasTest = int(pow(2, int(random(2)) + 5));
    //    cantColumnasTest = 8;
    //    console.log("cantColumnasTest 1: " + cantColumnasTest);

    //    caracterTest = new Caracter(largoSeg, rojo, verde, azul);
    //    caracterTest = new Caracter(largoSegTest, rojoTest, verdeTest, azulTest);

    //    cartelTest = new Carte(12);
    //    cartelTest = new Cartel(cantColumnasTest);

    //    console.log("cartelTest: " + cartelTest);

    //    for (let i = 0; i < 12; i++) {
    //        array1Test[i] = new Caracter(largoSegTest, rojoTest, verdeTest, azulTest);
    //    }

    //    for (let j = 0; j < 24; j++) {
    //        array1Test[j] = [];
    //        for (let i = 0; i < 24; i++) {
    //            array1Test[j][i] = new Caracter(largoSegTest, rojoTest, verdeTest, azulTest);
    //        }
    //    }

}

function draw() {

    background(colorFondo);

    //    cartelTest.colgar(1.5, 1.5);

    //    for (let i = 0; i < 12; i++) {
    //        array1Test[i].escribir((array1Test[i].anchoCol * i)+array1Test[i].anchoCol, 300);
    //    }

    //        for (let j = 0; j < 24; j++) {
    //            for (let i = 0; i < 24; i++) {
    //                array1Test[j][i].escribir((array1Test[j][i].anchoCol * i) + (array1Test[j][i].anchoCol * 9.5), (array1Test[j][i].altoRenglon * j) + (array1Test[j][i].altoRenglon * 3.5));
    //            }
    //        }

    //        caracterTest.escribir(100, 100);

    renderPag();

    noLoop();

}



function renderPag() {

    cantColumnas = int(pow(2, int(random(2)) + 6));

    if (width > height) {
        cantColumnas = int(cantColumnas * (width / height));
    }

    cartelA = new Cartel(cantColumnas);

    cartelA.colgar(0, 0);


    let probTitulo = random(1);

    factorCrecimientoCartel = (int(random(4)) + 1);

    if (probTitulo > 0.4) {
        //        factorCrecimientoCartel = (int(random(5))+1);
        cartelB = new CartelB(cantColumnas - 2, cartelA.anchoColumna, factorCrecimientoCartel);
        cartelB.colgar(0, 0);
    }

    probTitulo = random(1);
    if (probTitulo > 0.4) {
        //        factorCrecimientoCartel = (int(random(5))+1);
        factorCrecimientoCartel = factorCrecimientoCartel * (int(random(3)) + 2);
        cartelB = new CartelB(cantColumnas - 4, cartelA.anchoColumna, factorCrecimientoCartel);
        cartelB.colgar(0, 0);
    }

    probTitulo = random(1);
    if (probTitulo > 0.4) {
        //        factorCrecimientoCartel = (int(random(5))+1);
        factorCrecimientoCartel = factorCrecimientoCartel * (int(random(3)) + 2);
        cartelB = new CartelB(cantColumnas - 6, cartelA.anchoColumna, factorCrecimientoCartel);
        cartelB.colgar(0, 0);
    }


//    rectMode(CENTER);
//    noFill();
//    stroke(0);
//    strokeWeight(1);
//    rect(width / 2, height / 2, width, height);


}