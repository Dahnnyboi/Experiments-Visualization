let values = [0, 1, 2, 3, 4, 5, 6, 7, 8,];
let w;

function setup(){
  createCanvas(400, 400)
  frameRate(15);
  w = width / values.length;
  console.log(w);
  console.log(width);
  console.log(height);

}

function draw(){
  background(0);
  for(let i = 0; i < values.length; i++){
    fill(255);
    textSize(22);
    text(values[i], (i * w) + w / 3, height / 2);
  }
  console.log(values);

  
  let x = -1;
  for(let i = 0; i < values.length - 1; i++){
    if(values[i] < values[i + 1]){
      x = i;
    }
  }
  
  if(x == -1){
    console.log("Finished");
    noLoop();
  }
  
  let y = -1;
  for(let j = 0; j < values.length; j++){
    if(values[x] < values[j]){
      y = j;
    }
  }

  swap(values, x, y);
  let end = values.splice(x + 1);
  end.reverse();
  for(let e of end){
    values.push(e);
  }
}

function swap(arr, a, b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp; 
}