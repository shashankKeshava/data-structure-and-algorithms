function formatString(str, obj) {
    Object.keys(obj).map(function(key) {
        str = str.replace(new RegExp('{' + key + '}', 'g'), obj[key]);
    });
    return str;
}

var obj = {
    name: 'Shank',
    place: 'Bangalore',
};

var str = "Hi {name} I'm from {place}";

console.log(formatString(str, obj));
