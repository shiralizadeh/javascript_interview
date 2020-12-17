/*


Memoization is a form of caching where the return value of a function is cached based on its parameters.
If the parameter of that function is not changed, the cached version of the function is returned.
Let’s understand memoization, by converting a simple function to a memoized function:
**Note- Memoization is used for expensive function calls but in the following example,
    we are considering a simple function for understanding the concept of memoization better.


    function addTo256(num){
        return num + 256;
    }

    addTo256(20); // Returns 276
    addTo256(40); // Returns 296
    addTo256(20); // Returns 276



Let’s convert the above function addTo256, to a memoized function:

    function memoizedAddTo256(){
        var cache = {};
        return function(num){
            if(num in cache){
                console.log("cached value");
                return cache[num]
            }
            else{
                cache[num] = num + 256;
                return cache[num];
            }
        }
    }
    var memoizedFunc = memoizedAddTo256();
    memoizedFunc(20); // Normal return
    memoizedFunc(20); // Cached return

*/
