var Stack = function() {
    this.count = 0;
    this.storge = {};

    this.push = function(data) {
        this.storge[this.count++] = data;
    };

    this.pop = function() {
        this.count--;
        var result = this.storge[this.count];
        delete this.storge[this.count];
        //this.count--;
        return result;
    };

    this.peek = function() {
        return this.storge[this.count-1];
    };

    this.size = function() {
        return this.count;
    };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
//console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
