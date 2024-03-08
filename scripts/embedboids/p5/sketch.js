
const flock =[];
const NUMBER_OF_BOIDS = 120;
let velocitySlider, accelerationSlider, sightSlider;
function setup() {
    let divWidth = document.getElementById("boids-sub").offsetWidth;
    let divHeight = document.getElementById("boids-sub").offsetHeight;
    let canvas = createCanvas(divWidth, divHeight);
    canvas.parent("boids-sub")
    for(let i=0; i<NUMBER_OF_BOIDS; i++) {
        flock.push(new Boid())
      }
  }
  window.onresize = () => {
    let divWidth = document.getElementById("boids-sub").offsetWidth;
    let divHeight = document.getElementById("boids-sub").offsetHeight;
    resizeCanvas(divWidth, divHeight);
  };
  function draw() {
    background(51);
   
    flock.forEach(boid => {
        boid.edges()
        boid.alignBoids(flock)
        boid.updateBoids()
        boid.spawnBoids()
    })
}
