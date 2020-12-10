/*


JavaScript is always synchronous and single-threaded.
If we are executing a block of code in JavaScript, then no other code will run at the given same time.
JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls.
In that case, JavaScript make the Ajax request and will run with other code and does not block the execution for return value.
Upon the call returns a value, JS will run the callback and no other code will run at this point.
JavaScript’s setTimeout and setInterval also operates with this same kind of callback.
So it's more accurate to say that JavaScript is synchronous and single-threaded with various callback mechanisms.
jQuery Ajax has an options to make the calls synchronous. But this is problematics and allows to more traditional programming.


*/
