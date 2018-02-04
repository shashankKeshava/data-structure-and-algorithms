function Queue() {
    this.collection = [];

    this.enqueue = function(data) {
        return this.collection.push(data);
    };

    this.dequeue = function() {
        return this.collection.shift();
    };

    this.front = function() {
        return this.collection[0];
    };

    this.end = function() {
        return this.collection[this.collection.length - 1];
    };

    this.size = function() {
        return this.collection.length;
    };

    this.isEmpty = function() {
        return this.collection.length === 0;
    };

    this.print = function() {
        return this.collection;
    };
}

var que = new Queue();

// console.log(que.enqueue(1));
// console.log(que.enqueue(2));
// console.log(que.enqueue(5));
// console.log(que.enqueue(6));
// console.log(que.enqueue(11));
// console.log(que.enqueue(12));
// console.log(que.enqueue(13));
// console.log(que.enqueue(14));
// console.log(que.print());
// console.log(que.dequeue());
// console.log(que.size());
// console.log(que.end());

function PriorityQueue() {
    var collection = [];

    this.isEmpty = function() {
        return collection.length === 0;
    };

    this.enqueue = function(data) {
        if (this.isEmpty()) {
            collection.push(data);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                //console.log(collection);
                // Checking priorities
                if (data[1] < collection[i][1]) {
                    collection.splice(i, 0, data);
                    added = true;
                    break;
                }
            }
            if(!added) {
                collection.push(data);
            }
        }
        //this.print();
    };

    this.dequeue = function() {
        return collection.shift();
    };

    this.print = function() {
        return collection;
    };
}

var pq = new PriorityQueue();
console.log(pq.enqueue(['Shank', 1]));
console.log(pq.enqueue(['Kilo', 3]));
console.log(pq.enqueue(['Gamma', 7]));
console.log(pq.enqueue(['Fox', 2]));
console.log(pq.enqueue(['k1s', 3]));
console.log(pq.enqueue(['Tango', 10]));
console.log(pq.print());
console.log(pq.dequeue());
console.log(pq.print());