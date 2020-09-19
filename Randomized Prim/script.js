// Randomized Prim's Algorithm
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

// its working but the modified Prim's Algorithm will make it much more efficient 
// because it only tracks to edge of the created maze
// instead of checking every wall the is pushed into the wall list

let cols;
let rows;
let w = 20;

let start;
let grid = new Array(cols);

let wallList = [];
let nextCell;

function setup(){
  createCanvas(600, 400);
  cols = width / w;
  rows = height / w;

  for(let i = 0; i < cols; i++){ grid[i] = new Array(rows); }
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      grid[i][j] = new Cell(i, j);
    }
  }
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      grid[i][j].addWalls(grid);
    }
  }

  start = grid[0][0];
  start.visited = true;
  start.wallLines.map(wall => { 
    wallList.push(wall);
  });
}

function draw(){
  background(255);

  if(wallList.length != 0){
    let randomIndex = floor(random() * wallList.length);
    let randomWall = wallList[randomIndex];
    let current = randomWall.c;
    let next = randomWall.n;

    // step 1: pick a random wall from the list
    let wallIndex = randomWall.wallIndex;
    nextCell = next;
    
    if(current.visited ^ next.visited){
      // Make the wall a passage and mark the unvisited cell as part of the maze.
      removeWall(wallIndex, current, next);
      next.visited = true;
      // Add the neighboring walls of the cell to the wall list.
      next.wallLines.forEach(wall => {
        if(wall.wallLines == wallIndex){

        } else {
          wallList.push(wall);
        }
      })
    }
    // Remove the wall from the list.
    wallList.splice(randomIndex, 1);
  } else {
    console.log("created")
    noLoop();
  }
  
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      grid[i][j].show();
    }
  }
  nextCell.highlight(color(255, 0, 0));
}

function removeWall(wallIndex, a, b){
  if(wallIndex == 0){
    a.walls[0] = false;
    b.walls[2] = false;
  }

  if(wallIndex == 1){
    a.walls[1] = false;
    b.walls[3] = false;
  }

  if(wallIndex == 2){
    a.walls[2] = false;
    b.walls[0] = false;
  }

  if(wallIndex == 3){
    a.walls[3] = false;
    b.walls[1] = false;
  }
}