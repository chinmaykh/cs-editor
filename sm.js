// SCSCSCSCSCSC

// Globals (LOL)
var sunRadius = 0.3;
var planets = [];
var timeSpeed = 1


var rect = new Path.Rectangle({
  point: [0, 0],
  size: [view.size.width, view.size.height],
  strokeColor: 'white',
});
rect.sendToBack();
rect.fillColor = '#0B1026';

// Sun
var sun = new Shape.Circle(view.center, sunRadius * 10);
sun.fillColor = 'yellow'

// Mercury


function Planet(name, semimajor, eccentricity, timePeriod) {
  this.name = name;
  this.semimajor = semimajor;
  this.semiminor = minor(semimajor, eccentricity)
  this.eccentricity = eccentricity;
  this.timePeriod = timePeriod;
  this.radius = 4;
  this.self = new Shape.Circle(view.center + orbPos(0, this.semimajor, minor(this.semimajor, this.eccentricity), this.timePeriod), this.radius)
  this.updPos = function (time) {
    this.self.position = view.center + orbPos(time, this.semimajor, minor(this.semimajor, this.eccentricity), this.timePeriod)
  }
  this.self.fillColor = 'white'
  this.orbit = new Shape.Ellipse({
    center: view.center,
    radius: [scalekm(this.semimajor), scalekm(this.semiminor)],
    strokeColor: 'white'
  });
  this.orbit.strokeColor = 'white'
}

init();

// Create all the planets
function init() {
  planets.push(new Planet('mercury', 57909050, 0.205360, 87.9691))
  planets.push(new Planet('venus', 108208000, 0.006722, 224.7))
  planets.push(new Planet('earth', 1.496e8, 0.0167, 365.4))
  planets.push(new Planet('mars', 227939200, 0.0934, 686.971))
  planets.push(new Planet('jupiter', 778.57e6, 0.0489, 4332.59))
  planets.push(new Planet('saturn', 1433.53e6, 0.0565, 10759.22))
  planets.push(new Planet('uranus', 2875.04e6, 0.046381, 30688.5))
  planets.push(new Planet('neptune', 4.495e9, 0.008678, 60182))
}

function onFrame(event) {
  // count, time and duration
  // console.log(Math.floor(event.time));
  for (p = 0; p < planets.length; p++) {
    planet = planets[p];
    planet.updPos(event.time)
  }
}

function orbPos(time, a, b, tp) {
  time *= 10
  omega = (2 * 3.1415) / (tp)
  // console.log(a * (Math.cos(omega * time)), omega * time);
  // console.log((new Point(scalekm(a * (Math.cos(omega * time))), scalekm(b * (Math.sin(omega * time))))));
  return (new Point(scalekm(a * (Math.cos(omega * time))), scalekm(b * (Math.sin(omega * time)))))
}

// Minor Axis
function minor(a, e) {
  var semiminor = Math.sqrt((Math.pow(a, 2) * (1 - Math.pow(e, 2))))
  // console.log(semiminor);
  return semiminor
}

function scalekm(dist, au) {
  // Function for scaling the distances. Accepts km/au and converts to paperjs units.
  if (au) {
    dist *= 1.496e8
    console.log(dist);
  }

  return (sunRadius / 695700) * dist
}

document.getElementById('control').onsubmit = function () {
  controlData = new FormData(document.getElementById('control'))
  view.zoom = controlData.get('sunRadius')
  return false;
}

console.log(scalekm(57909050));