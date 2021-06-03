class CartelB {

    constructor(_cantColumnas, _anchoColumna, _factorCrecimientoCartel) {

        this.probCambioModoColor = random(1);

        if (this.probCambioModoColor < 0.4) {
            this.modoColor = "soloTexto";
        } else if (this.probCambioModoColor < 0.7) {
            this.modoColor = "ByN";
        } else {
            this.modoColor = "color";
        }

        if (int(random(2)) > 0.5) {
            this.escritHorizontal = true;
        } else {
            this.escritHorizontal = false;
        }

//        console.log("this.escritHorizontal: " + this.escritHorizontal);


        //        this.cantColumnas = _cantColumnas;
        //        console.log("this.cantColumnas: " + _cantColumnas);

        this.anchoColumna = _anchoColumna; //

        this.factorCrecimientoCartel = _factorCrecimientoCartel; //

        //        this.anchoColumna = width / this.cantColumnas;
        this.anchoColumna = this.anchoColumna * this.factorCrecimientoCartel; //
        //        console.log("this.anchoColumna: " + this.anchoColumna);

        this.cantColumnas = int(width / this.anchoColumna) - 1; //

        this.largoSeg = this.anchoColumna / 3.08; //
        console.log("this.largoSeg: " + this.largoSeg);

        this.altoRenglon = this.anchoColumna * 1.5; //
//        console.log("this.altoRenglon: " + this.altoRenglon);

        this.cantRenglones = int(height / this.altoRenglon); //
//        console.log("this.cantRenglones: " + this.cantRenglones);

        this.cantColumnas = this.cantColumnas + 1; //
//        console.log("this.cantColumnas: " + this.cantColumnas);

        this.proporcionMargenes = 1.6; //

        this.margSuperior = int(random(random(this.cantRenglones / this.proporcionMargenes))); //
        this.margInferior = int(random(random(this.cantRenglones / this.proporcionMargenes))); //
        this.margDerecho = int(random(random(this.cantColumnas / this.proporcionMargenes))); //
        this.margIzquierdo = int(random(random(this.cantColumnas / this.proporcionMargenes))); //

//        console.log("this.margSuperior: " + this.margSuperior);
//        console.log("this.margInferior: " + this.margInferior);
//        console.log("this.margDerecho: " + this.margDerecho);
//        console.log("this.margIzquierdo: " + this.margIzquierdo);

        this.cantColumnasCartel = this.cantColumnas - this.margDerecho - this.margIzquierdo; // 

        if (this.cantColumnasCartel < 0) {
            this.cantColumnasCartel = 0;
        }

//        console.log("this.cantColumnasCartel: " + this.cantColumnasCartel);

        this.cantRenglonesCartel = this.cantRenglones - this.margSuperior - this.margInferior; // 

        if (this.cantRenglonesCartel < 0) {
            this.cantRenglonesCartel = 0;
        }

//        console.log("this.cantRenglonesCartel: " + this.cantRenglonesCartel);


        this.largoTrayectoria = int(random(width * height / 100)); //

//        console.log("this.largoTrayectoria: " + this.largoTrayectoria);

        //        this.trayectoria = new int[this.largoTrayectoria];
        this.trayectoria = []; //

//        console.log("this.trayectoria: " + this.trayectoria);


        this.margenProbCambioColFdoCar = 0.17 / this.cantColumnas;
//        console.log("this.margenProbCambioColFdoCar: " + this.margenProbCambioColFdoCar);


        this.cambiarColorFondoCar();
//        console.log("this.margenProbCambioColFdoCar: " + this.margenProbCambioColFdoCar);

        this.caracteres = [];
//        console.log("this.cambiarColorFondoCar(): " + this.cambiarColorFondoCar());


        if (this.escritHorizontal) {

            for (let j = this.margSuperior; j < this.cantRenglonesCartel; j++) {
                this.caracteres[j] = [];
                for (let i = this.margIzquierdo; i < this.cantColumnasCartel; i++) {
                    this.probCambioColorFondoCar = random(1);
                    if (this.probCambioColorFondoCar < this.margenProbCambioColFdoCar) {
                        this.cambiarColorFondoCar();
                    }
                    //                this.caracteres[j][i] = new Caracter(largoSegTest, rojoTest, verdeTest, azulTest);
                    this.caracteres[j][i] = new Caracter(this.largoSeg, this.rojo, this.verde, this.azul);
                }
            }

        } else {

            for (let i = this.margIzquierdo; i < this.cantColumnasCartel; i++) {
                this.caracteres[i] = [];
                for (let j = this.margSuperior; j < this.cantRenglonesCartel; j++) {
                    this.probCambioColorFondoCar = random(1);
                    if (this.probCambioColorFondoCar < this.margenProbCambioColFdoCar) {
                        this.cambiarColorFondoCar();
                    }
                    //                this.caracteres[j][i] = new Caracter(largoSegTest, rojoTest, verdeTest, azulTest);
                    this.caracteres[i][j] = new Caracter(this.largoSeg, this.rojo, this.verde, this.azul);
                }
            }

        }



        this.posRengOrig = round(random(this.cantRenglones));
        this.posColOrig = round(random(this.cantColumnas));

        for (let i = 0; i < this.largoTrayectoria; i++) {
            this.trayectoria[i] = int(random(5));
        }

    }


    colgar(_x, _y) {

        this.x = _x;
        this.y = _y;

        push();

        translate(this.x, this.y);
        translate(this.anchoColumna / 2.0, this.altoRenglon / 2.0);


        if (this.escritHorizontal) {

            for (let j = this.margSuperior; j < this.cantRenglonesCartel; j++) {
                for (let i = this.margIzquierdo; i < this.cantColumnasCartel; i++) {
                    this.caracteres[j][i].escribir((this.caracteres[j][i].anchoCol * i) + (this.caracteres[j][i].anchoCol * this.x), (this.caracteres[j][i].altoRenglon * j) + (this.caracteres[j][i].altoRenglon * this.y));
                }
            }

        } else {

            for (let i = this.margIzquierdo; i < this.cantColumnasCartel; i++) {
                for (let j = this.margSuperior; j < this.cantRenglonesCartel; j++) {
                    this.caracteres[i][j].escribir((this.caracteres[i][j].anchoCol * i) + (this.caracteres[i][j].anchoCol * this.x), (this.caracteres[i][j].altoRenglon * j) + (this.caracteres[i][j].altoRenglon * this.y));
                }
            }

        }


        translate(-this.anchoColumna / 2, -this.altoRenglon / 2);

        pop();
    }


    cambiar() {
        for (let j = 0; j < this.cantRenglones; j++) {
            for (let i = 0; i < this.cantColumnas; i++) {
                this.caracteres[i][j].cambiar();
            }
        }
    }

    cambiarColorFondoCar() {

        if (this.modoColor == "soloTexto") {
            this.rojo = 255;
            this.verde = 255;
            this.azul = 255;
        } else if (this.modoColor == "ByN") {
            this.rojo = float(int(random(2))) * 255;
            this.verde = this.rojo;
            this.azul = this.rojo;
        } else if (this.modoColor == "color") {
            this.rojo = (float((int(random(3)) + 1)) / 4) * 255;
            this.verde = (float((int(random(3)) + 1)) / 4) * 255;
            this.azul = (float((int(random(3)) + 1)) / 4) * 255;
        }
    }

}