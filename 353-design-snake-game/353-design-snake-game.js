/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    // 0 = empty
    // 1 = food
    // -1 = obstacle
    this.width = width;
    this.height = height;
    this.dirs = {'R': [0,1], 'D': [1,0], 'L': [0,-1], 'U': [-1,0]};
    this.currFood = food.shift();
    this.foods = food;
    this.snake = [[0,0]]
};

/** 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    const [r,c] = [this.snake[0][0], this.snake[0][1]];
    const [rDelta, cDelta] = this.dirs[direction];
    const [newR, newC] = [r + rDelta, c + cDelta];
    if (newR < 0 || newR===this.height || newC < 0 || newC===this.width) return -1;
    if (newR !== this.currFood[0] || newC !== this.currFood[1]) {
        this.snake.pop();
    } else {
        this.currFood = this.foods.length > 0 ? this.foods.shift() : [-1,-1];
    }
    for (const [r,c] of this.snake) {
        if (newR === r && newC === c) return -1;
    }
    this.snake.unshift([newR, newC]);
    return this.snake.length-1;
};

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */