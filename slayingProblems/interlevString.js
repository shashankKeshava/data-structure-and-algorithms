var iStr=[];

function interLeaveString(str1,str2,m,n,i){
    if(m==0&&n==0){
        console.log(iStr);
    }

    if(m!=0){
        iStr[i]=str1[0];
        // console.log('m:',iStr[i]);
        interLeaveString(str1.slice(1),str2,m-1,n,i+1)
    }

    if(n!=0){
        iStr[i]=str2[0];
        // console.log('n:',iStr[i]);
        interLeaveString(str1,str2.slice(1),m,n-1,i+1)
    }
}



(function(){
var str1='AB';
var str2='CD';
var m=str1.length;
var n=str2.length;
interLeaveString(str1,str2,m,n,0);
})();