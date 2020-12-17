/*


Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.

    function add(number) {
        if (number <= 0) {
            return 0;
        } else {
            return number + add(number - 1);
        }
    }

    add(3) => 3 + add(2)
            3 + 2 + add(1)
            3 + 2 + 1 + add(0)
            3 + 2 + 1 + 0 = 6  


*/
