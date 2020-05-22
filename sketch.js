var gif;

function preload() {
    gif = loadGif('bpb.gif');
}

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(100);
  if (gif.loaded()) {
    image(gif, 0, 0);
  }
}