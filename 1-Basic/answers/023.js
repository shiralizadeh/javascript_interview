/*


Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

    function higherOrder(fn) {
        fn();
        }   
    higherOrder(function() { console.log("Hello world") }); 


    function higherOrder2() {
        return function() {
            return "Do something";
        }
    }
    var x = higherOrder2();
    x()   // Returns "Do something"



*/
