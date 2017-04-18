function Coin (cX, cY, rad, pile) {
    this.radius = rad;
    this.col = color(214, 226 , 236); // Fill color
    this.x = Math.floor(cX); // Coin.x
    this.y = Math.floor(cY); // Coin.y

    this.pile = pile;
    this.clicked = false;
    this.selected = false;

    this.click = function () {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.radius && !this.selected) {
            if (!this.clicked) {
                this.col = color(247, 250 , 251);
                this.clicked = true;
            } else {
                this.col = color(214, 226 , 236);
                this.clicked = false;
            }
        }
    }

    this.reset = function () {
        this.col = color(214, 226 , 236);
        this.clicked = false;
        this.deleteothers = false;
    }

    this.update = function (index, arr, turn) {
        var limiter = 10;
        var diffX , diffY;
        var targetX, targetY;
        var centerX = Math.floor(width / 2);
        var total = arr.length;
        var middleArr;

        // Go to player pile X-axis
        if (total % 2 == 0) {
            middleArr = (total/ 2) - 1;

            if (index <= middleArr) {
                targetX = Math.floor(centerX - rad - (rad * 2 * (middleArr - index)));
            } else {
                targetX = Math.floor(centerX + rad + (rad * 2 * (index - middleArr - 1)));
            }
        } else {
            middleArr = Math.ceil(total/ 2) - 1;

            if (index < middleArr) {
                targetX = Math.floor(centerX - rad * (2 * (middleArr - index)));
            } else if (index > middleArr) {
                targetX = Math.floor(centerX + rad *  (2 * (index - middleArr)));
            } else {
                targetX = centerX;
            }
        }

        // Go to player pile Y-axis
        if (turn == "player") {
            targetY = Math.floor(height * 0.88);
        } else {
            targetY = Math.floor(height * 0.12);
        }

        // Get Y-axis difference
        diffX = targetX - this.x;
        diffY = targetY - this.y;

        // Go to targets
        if (Math.abs(diffX) < 1) this.x = targetX; else this.x += diffX / limiter;
        if (Math.abs(diffY) < 1) this.y = targetY; else this.y += diffY / limiter;

    }

    this.show = function () {
        stroke(this.col);
        fill(this.col);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }
}