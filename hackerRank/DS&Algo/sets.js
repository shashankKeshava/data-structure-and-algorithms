function mySet() {
    this.collection = [];

    this.has = function(data) {
        if (this.collection.indexOf(data) === -1) {
            return false;
        }
        return true;
    };

    this.add = function(data) {
        if (!this.has(data)) {
            this.collection.push(data);
        }
        return this.collection;
    };

    this.delete = function(data) {
        if (this.has(data)) {
            var index = this.collection.indexOf(data);
            this.collection.splice(index, 1);
        }
        return this.collection;
    };

    this.size = function() {
        return this.collection.length;
    };

    this.values = function() {
        return this.collection;
    };

    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        firstSet.map(function(ele) {
            unionSet.add(ele);
        });
        var secondSet = otherSet.values();
        secondSet.map(function(ele) {
            unionSet.add(ele);
        });

        return unionSet.values();
    };

    this.intersection=function(otherSet){
        var interSectionSet=new mySet();
        var firstSet=this.values();
        firstSet.map(function(ele){
            if(otherSet.has(ele)){
                interSectionSet.add(ele);
            }
        })
        return interSectionSet.values();
    }

    this.difference=function(otherSet){
        var diff=new mySet();
        var firstSet=this.values();
        firstSet.map(function(ele){
            if(!otherSet.has(ele)){
                diff.add(ele);
            }
        })
        return diff.values();
    }

    this.subSet=function(otherSet){
        var subSet=new mySet();
        var firstSet=this.values();
        firstSet.map(function(ele){
            if(otherSet.has(ele)){
                subSet.add(ele);
            }
        })
        return subSet.values();
    }
}

var set1 = new mySet();
console.log(set1.add(1));
console.log(set1.add(1));
console.log(set1.add(9));
console.log(set1.add(2));
console.log(set1.add(6));
//console.log(set.delete(1));

var set2=new mySet();
console.log(set2.add(3));
console.log(set2.add(4));
console.log(set2.add(5));
console.log(set2.add(6));
console.log(set2.add(2));
console.log(set2.add(9));

//console.log(set1.union(set2));
//console.log(set1.intersection(set2));
//console.log(set1.difference(set2));
console.log(set1.subSet(set2));