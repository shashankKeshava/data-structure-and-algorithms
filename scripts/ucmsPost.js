var counter=0;
function postForm(){
    fetch('http://172.16.69.21:8000/usersubmission/ET00061158',
    {
        method:'POST',
        body:{
        "Name": "Shank",
        "Email Id": "shak@aol.com",
        "Phone Number": "1234567890"
    }).then(res=>res.json())
    .catch(error=>console.log('Error:',error))
    .then(response=>console.log(counter++,'\n\nSuccess:',response))
}

setTimeout(() => {
    postForm()
}, 150000);