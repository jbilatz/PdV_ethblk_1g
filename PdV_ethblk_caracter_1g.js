class Caracter {

    constructor(_largoSeg, _rojo, _verde, _azul) {

        this.segmentos = [];

//        console.log("_largoSeg: "+_largoSeg);

        this.rojo = _rojo;
        this.verde = _verde;
        this.azul = _azul;
//        console.log("_azul: "+_azul);
//        console.log("azul: "+this.azul);

        this.largoSeg = _largoSeg;
        
        this.cantSegs = 12;

        this.anchoCol = this.largoSeg * 3.08;
        this.altoRenglon = this.anchoCol * 1.5;

        this.probabilidadEspacio = random(7);

        this.brilloFondoCar = (this.rojo + this.verde + this.azul) / 3;
        if (this.brilloFondoCar > 127) {
            this.colorSeg = 0;
        } else {
            this.colorSeg = 255;
        }

        for (let i = 0; i < this.cantSegs; i++) {
            this.segmentos[i] = new Segmento(this.largoSeg, this.colorSeg);
        }

//        this.factorSolapFondoCar = 1.013;
        this.factorSolapFondoCar = 1 + (0.055 / (1 + ((this.largoSeg-3.8)/20) ) );
//        console.log("this.this.factorSolapFondoCar: " + this.factorSolapFondoCar);
        rectMode(CENTER);

    }


    escribir(_x, _y) {

        this.x = _x;
        this.y = _y;

        push();
        translate(this.x, this.y);

        push();
        noStroke();
        fill(this.rojo, this.verde, this.azul);

        rect(0, 0, this.anchoCol * this.factorSolapFondoCar, this.altoRenglon * this.factorSolapFondoCar);
        pop();

        if (this.probabilidadEspacio > 1) {

            push();

            rotate(angTrama);
            this.segmentos[0].dibujar(-this.largoSeg, -this.largoSeg, 0, -this.largoSeg);
            this.segmentos[1].dibujar(0, -this.largoSeg, this.largoSeg, 0 - this.largoSeg);
            this.segmentos[2].dibujar(this.largoSeg, 0 - this.largoSeg, this.largoSeg, 0);
            this.segmentos[3].dibujar(this.largoSeg, 0, this.largoSeg, this.largoSeg);
            this.segmentos[4].dibujar(this.largoSeg, this.largoSeg, 0, this.vlargoSeg);
            this.segmentos[5].dibujar(0, this.largoSeg, 0 - this.largoSeg, this.largoSeg);
            this.segmentos[6].dibujar(0 - this.largoSeg, this.largoSeg, 0 - this.largoSeg, 0);
            this.segmentos[7].dibujar(0 - this.largoSeg, 0, 0 - this.largoSeg, 0 - this.largoSeg);

            this.segmentos[8].dibujar(0, 0 - this.largoSeg * 2, 0, 0 - this.largoSeg);
            this.segmentos[9].dibujar(0, 0 - this.largoSeg, 0, 0);
            this.segmentos[10].dibujar(0, 0, 0, this.largoSeg);
            this.segmentos[11].dibujar(0, this.largoSeg, 0, this.largoSeg * 2);

            pop();
        }
        pop();

    }

    cambiar() {
        for (let i = 0; i < this.cantSegs; i++) {
            this.segmentos[i].cambiar();
        }

        this.probabilidadEspacio = random(7);
    }

}