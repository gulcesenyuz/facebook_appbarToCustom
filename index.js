const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectangle with l=" + l + " and b=" + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERR: ", err.message);
        }
        else {
            console.log("perimeter: " + rectangle.perimeter());
            console.log("area : " + rectangle.area());
        }

    });


}


solveRect(2, 4);
solveRect(5, 15);
solveRect(0, 5);