// Calculate Sum of weight
function weightedSum(weight) {
    return weight.split('').reduce((accumulator, current) => {
        return accumulator + Math.floor(current);
    }, 0);
}

// Simple compare function
function compare(a, b) {
    return a < b ? -1 : 1;
}


function orderWeight(strng) {
  
    const formattedWeights = strng.split(/\s{1}/);

//   Index and sort the weights
    const sortedWeightsWithIndex = formattedWeights.map((weight) => {
        return {
            key: weight,
            value: weightedSum(weight)
        }
    }).sort((a, b) => {
        console.log(a, b);
        const diff = a.value - b.value;
        return diff === 0 ? compare(a.key, b.key) : diff;
    });

    return sortedWeightsWithIndex.map(item => item.key).join(' ');
}