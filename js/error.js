function Error () {
    this.text = "Pick coin(s) first!";
    this.element = createP(this.text);

    this.x = Math.floor(width / 2) - 110;
    this.y = Math.floor(height / 4);

    this.alpha = 1;
    this.col = color(241, 22, 66);

    this.update = function () {
        this.alpha -= 0.02;
        if (this.alpha <= 0) {
            this.alpha = 0; 
            this.element.style("display", "none");
        } else {
            this.y -= 1;
        }
    }

    this.show = function () {
        this.element.position(this.x, this.y);
        this.element.style("font-size", "30px");
        this.element.style("color", this.col);
        this.element.style("opacity", this.alpha);
        // this.element.style("z-index", 5);
        this.element.parent('content');
    }
}