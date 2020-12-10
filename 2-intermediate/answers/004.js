/*


Closure is a locally declared variable related to a function which stays in memory when the function has returned.

    function makeAdder(x) {
        return function(y) {
            console.log("X:" + x + " Y:" + y);
            return x + y;
    };

    }

    var add5 = makeAdder(5);
    var add10 = makeAdder(10);

    console.log(add5(2));
    console.log(add10(2));


*/
