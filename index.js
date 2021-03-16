var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRect(l, b) {
    console.log("Solving for rectangle with l=" + l + " and b=" + b);

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be grather than 0");
    } else {
        console.log("the erea of he rectangle is" + rect.area(l, b));
        console.log("the perimeter of he rectangle is" + rect.perimeter(l, b));
    }

}


solveRect(2, 4);
solveRect(5, 15);
solveRect(0, 5);