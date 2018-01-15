function duplicateIdentifier(str) {
    str = str.split('');
    var temp=[],i=0;
    while(i<str.length){
        if(temp.indexOf(str[i])==-1){
            temp.push(str[i]);
        }else{
            console.log('Duplicate:',str[i]);
        }
        i++;
    }
}

duplicateIdentifier('geekforgeeks');
