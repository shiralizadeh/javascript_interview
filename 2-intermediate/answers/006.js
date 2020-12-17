/*


The “this” keyword refers to the object that the function is a property of.
The value of “this” keyword will always depend on the object that is invoking the function.

    var obj = {
        name:  "vivek",
        getName: function(){
        console.log(this.name);
    }     
    }
        
    var getName = obj.getName;         
    var obj2 = {name:"akshay", getName };
    obj2.getName();


*/
