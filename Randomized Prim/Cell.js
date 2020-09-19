class Cell{
  constructor(i, j){
    this.i = i;
    this.j = j;

    this.visited = false;

    this.walls = [true, true, true, true];
    this.wallLines = [];
  }

  highlight(col){
    fill(col);
    noStroke();
    rect((this.i * w) + 4, (this.j * w) + 4, w - 8, w - 8);
  }

  addWalls(grid){
    let x = this.i * w;
    let y = this.j * w;
    
    if(this.j > 0){
      let topWall = new Wall();
      topWall.setPointA(x, y);
      topWall.setPointB(x + w, y);
      this.wallLines.push({wallIndex: 0, wall: topWall, n : grid[this.i][this.j - 1], c: grid[this.i][this.j]});
      //this.wallLines[0] = topWall;
    }

    if(this.i < cols - 1){
      let rightWall = new Wall();
      rightWall.setPointA(x + w, y);
      rightWall.setPointB(x + w, y + w);
      this.wallLines.push({wallIndex: 1, wall: rightWall, n : grid[this.i + 1][this.j], c: grid[this.i][this.j]});
      //this.wallLines[1] = rightWall;
    }

    if(this.j < rows - 1){
      let bottomWall = new Wall();
      bottomWall.setPointA(x + w, y + w);
      bottomWall.setPointB(x, y + w);
      this.wallLines.push({wallIndex: 2, wall: bottomWall, n : grid[this.i][this.j + 1], c: grid[this.i][this.j]});
      //this.wallLines[2] = bottomWall;
    }
    
    if(this.i > 0){
      let leftWall = new Wall();
      leftWall.setPointA(x, y + w);
      leftWall.setPointB(x, y);
      this.wallLines.push({wallIndex: 3, wall: leftWall, n : grid[this.i - 1][this.j], c: grid[this.i][this.j]});
      //this.wallLines[3] = leftWall;
    }
  
}

  show(){
    if(!this.visited){
      fill(0);
    } else {
      fill(255);
    }

    noStroke();
    rect((this.i * w) + 4, (this.j * w) + 4, w, w);

    let x = this.i * w;
    let y = this.j * w;
    
    stroke(0);
    strokeWeight(8);
    if(this.walls[0]){
      line(x, y, x + w, y);
    }
    if(this.walls[1]){
      line(x + w, y, x + w, y + w);
    }
    if(this.walls[2]){
      line(x + w, y + w, x, y + w);
    }
    if(this.walls[3]){
      line(x, y + w, x, y);
    }
  }
};