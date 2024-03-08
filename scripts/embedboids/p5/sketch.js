
const flock =[];
const NUMBER_OF_BOIDS = 300;
let velocitySlider, accelerationSlider, sightSlider;
function setup() {
    let renderer = createCanvas(windowWidth, windowHeight);
    renderer.parent("boids-sub")
    velocitySlider = createSlider(2, 10, 1, 0.1);
    accelerationSlider = createSlider(1, 2, 1, 0.1);
    sightSlider = createSlider(10, 40, 1, 0.1);
    for(let i=0; i<NUMBER_OF_BOIDS; i++) {
        flock.push(new Boid())
      }
  }
  window.onresize = () => {
        resizeCanvas(window.innerWidth, window.innerHeight-125)
      }
  function draw() {
    background(51);
    flock.forEach(boid => {
        boid.maxVelocity =  velocitySlider.value();
        boid.maxAcceleration = accelerationSlider.value();
        boid.sight = sightSlider.value();
    })
    flock.forEach(boid => {
        boid.edges()
        boid.alignBoids(flock)
        boid.updateBoids()
        boid.spawnBoids()
    })
}
