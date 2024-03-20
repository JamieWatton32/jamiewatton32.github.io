
const flock =[];
const NUMBER_OF_BOIDS = 100;
let velocitySlider, accelerationSlider, sightSlider;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i=0; i<NUMBER_OF_BOIDS; i++) {
        flock.push(new Boid())
      }
  }
  function draw() {
    background("whitesmoke");

    flock.forEach(boid => {
        boid.edges()
        boid.alignBoids(flock)
        boid.updateBoids()
        boid.spawnBoids()
    })
}
