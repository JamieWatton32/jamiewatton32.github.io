
const flock =[];
const NUMBER_OF_BOIDS = 5;
let velocitySlider, accelerationSlider, sightSlider;

function setup() {
    let divWidth = document.getElementById("boids").offsetWidth;
    let divHeight = document.getElementById("boids").offsetHeight;
    let canvas = createCanvas(divWidth, divHeight);
    canvas.parent("#boids-sub")
    for(let i=0; i<NUMBER_OF_BOIDS; i++) {
        flock.push(new Boid())
      }
  }

  function draw() {
    background(51);
   
    flock.forEach(boid => {
        boid.edges()
        boid.alignBoids(flock)
        boid.updateBoids()
        boid.spawnBoids()
    })
}
