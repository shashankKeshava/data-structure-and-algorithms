var input = "15\nQ 1 1.2 2.5\nS 1 1.3 2.5\nS 1 1.2 2.6\nQ 1 1.2 2.6\nQ 1 1.2 2\nS 2 2 3.5\nQ 2 2.3 3.5\nS 1 1.2 3.4\nQ 1 1 -1\nS 3 2.3 6.7\nS 3 2.4 6.8\nS 2 2 7.8\nQ 3 2 6.7\nQ 3 2 6\nQ 1.3 2 -1";
//var input="11\nS 1 1 2\nS 2 1.1 2\nS 2 2.3 1\nS 1 2.2 1\nQ 1 1 2\nQ 1 2 1\nQ 2 1 2\nQ 2 2 1\nQ 1.2 1 -1\nQ 1.2 -1 2\nQ 1.2 -1 -1";


function processData(input) {
    var lines = input.split("\n");
    var len = lines[0];
    var query = [],
        sale = [],
        i = 0,
        contents;
    while (i < len) {
        i++;
        contents = lines[i].split(' ')[0]
        contents[0] == 'Q' ? query.push(lines[i]) : sale.push(lines[i]);
    }
    console.log(query, sale);
}

processData(input);