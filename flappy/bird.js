class Bird {
    constructor(img, x, y) {
        this.img = img
        this.width = img.width
        this.height = img.height

        this.x = x
        this.y = y

        this.dy = 0
        this.gravity = 0.2
    }

    display() {
        image(this.img, this.x, this.y)
    }
    update() {
        this.dy += this.gravity
        this.y += this.dy
        this.y = constrain(this.y, 0, 264)
    }

    jump() {
        this.dy = -3
    }

    reset(y) {
        this.y = y
        this.dy = 0
        this.gravity = 0.2
    }

    collides(pipe) {
        if (this.x > pipe.x + pipe.width / 2 || pipe.x > this.x + this.width) {
            return false
        }

        if (this.y > pipe.y - pipe.gap && pipe.y > this.y + this.height) {
            return false
        }
        return true
    }
}