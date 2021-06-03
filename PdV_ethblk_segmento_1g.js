class Segmento {

    //    let x, y, x1, y1; // float
    //    let largoSeg; // float
    //    let anchoSeg; // float
    //    let prendido; // boolean
    //    let colorSeg; // int

    constructor(_largoSeg, _colorSeg) {

        this.largoSeg = _largoSeg;
        this.colorSeg = _colorSeg;

        this.anchoSeg = this.largoSeg / 3.5;
        this.prendido = boolean(int(random(2)));

    }

    dibujar(_x, _y, _x1, _y1) {
        if (this.prendido) {

            this.x = _x;
            this.y = _y;
            this.x1 = _x1;
            this.y1 = _y1;

            push();
            noFill();
            stroke(this.colorSeg);
            strokeWeight(this.anchoSeg);

            line(this.x, this.y, this.x1, this.y1);

            pop();

        }
    }

    cambiar() {
        this.prendido = boolean(int(random(2)));
    }

}