function* countAppleSales () {
    var saleList = [3, 7, 5];
    a = 0
    for (var i = 0; i < saleList.length - 1; i++) {
        a=yield saleList[i];
        // console.log(a);
    }
    // return console.log(a);
  }
  var appleStore = countAppleSales(); // Generator { }
//   console.log(appleStore.next(a)); // { value: 3, done: false }
//   debugger

//   function a() {
//      return 1
//   }

  console.log(appleStore.next()); // { value: 7, done: false }
  console.log(appleStore.next()); // { value: 5, done: false }
  console.log(appleStore.next(a)); // { value: undefined, done: true }