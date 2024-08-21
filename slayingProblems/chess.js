function drawChart(len){

    var box = document.createElement('div');
    box.setAttribute('style','width:500px;height:500px;border:1px solid black;display:flex;flex-direction:column');

    for(var i=0; i<len; i++){

     var row = document.createElement('div');
      if(i<len-1){
          row.setAttribute('style','border-bottom:1px solid black;display:flex;box-sizing: border-box; flex: 1;');
      }
     else{
       row.setAttribute('style','display:flex;box-sizing: border-box; flex: 1;');
     }
      for(var j=0; j<len; j++){
        var col = document.createElement('div');
        if(i%2===0){
          if(j%2===0){
            col.setAttribute('style','background-color:white; flex: 1;');
          }
          else{
            col.setAttribute('style','background-color:black; flex: 1;');
          }
        }else{

          if(j%2===0){
            col.setAttribute('style','background-color:black; flex: 1;');
          }
          else{
            col.setAttribute('style','background-color:white; flex: 1;');
          }
        }
        row.appendChild(col);
      }
      box.appendChild(row);
    }
    document.body.appendChild(box);
  }


  drawChart(5);