
class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(1,2));
        this.acceleration = createVector();
        this.maxAcceleration;
        this.maxVelocity;
        this.width = windowWidth;
        this.height = windowHeight;
        this.sight;
    }

    // Spawns boids
    spawnBoids() {
        point(this.position.x,this.position.y);
        strokeWeight(7);
        stroke(255, 255, 255);
      
    }   
    // Confines boids to screen
    edges() {
        if (this.position.x > this.width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = this.width;
        }

        if (this.position.y > this.height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = this.height;
        }
    }

    // Updates boid position using velocity and acceleration.
    updateBoids() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.velocity);
    }

    // Defines steering behaviour
    alignment(boids) {
        let total_boids =0; //Sum of boids inside perceived radius
        let average_velocity = createVector();

        boids.forEach(boid => {
            // Distance between boid and actual boid
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            )
        // If boid is inside perception radius
        if(d < this.sight && boid != this.sight) {
            average_velocity.add(boid.velocity)
            total_boids++
        }
        
    })
    if(total_boids > 0) {
        average_velocity.div(total_boids)
        // Ensures the boid doesn't deaccelerate ↓ ↓ ↓
        average_velocity.setMag(this.maxVelocity) 
        // Ensures the boid doesn't deaccelerate ↑ ↑ ↑
        average_velocity.sub(this.velocity)
        average_velocity.limit(this.maxAcceleration)
    }
    return average_velocity
}

    // Directs each boids to the centre of mass of surrounding boids in some sight range
    cohesion(boids) {
        let total_boids =0; //Sum of boids inside perceived radius
        let steering = createVector();

        boids.forEach(boid => {
            // Distance between boid and actual boid
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            )
        // If boid is inside perception radius
        if(d < this.sight && boid != this.sight) {
            steering.add(boid.velocity)
            total_boids++
        }
        
    })
    if(total_boids > 0) {
        steering.div(total_boids)
        steering.setMag(this.maxVelocity)
        steering.sub(this.velocity)
        steering.limit(this.maxAcceleration)
    }
    return steering
}

    // Defines separation between each boids from surrounding boids.
    separation(boids) {
        let total_boids =0; //Sum of boids inside perceived radius
        let separation= createVector();
        boids.forEach(boid => {
            // Distance between boid and actual boid
            let d = dist(
                this.position.x, 
                this.position.y, 
                boid.position.x, 
                boid.position.y
            )
        // If boid is inside perception radius
        if(d < this.sight && boid != this.sight) {
            separation.add(boid.velocity)
            total_boids++
        }
        
    })
    if(total_boids > 0) {
        separation.div(total_boids)
        separation.setMag(this.maxVelocity)
        separation.sub(this.velocity)
        separation.limit(this.maxAcceleration)
    }
    return separation
}

    alignBoids(boids) {
        this.acceleration.set(0,0);
        let alignment = this.alignment(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }
}
