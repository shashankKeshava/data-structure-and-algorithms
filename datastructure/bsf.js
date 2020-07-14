// Breath First Search

function bfs(graph, root) {
    // Used to store distances to the root node
    var nodeLen = {};

    // Initially set all distances to infinity
    for (var i = 0; i < graph.length; i++) {
        nodeLen[i] = Infinity
    }
    // Distance to root node from root node is set to 0
    nodeLen[root] = 0;

    // Create a simple queue to keep track of nodes visited
    var queue = [root];
    // Created to keep track of current node we are traversing
    var current;

    while (queue.length != 0) {
        current = queue.shift()

        var currConnected = graph[current]
        var neighbourIndex = []
        // Find index of connected node
        var idx = currConnected.indexOf(1);

        while (idx != -1) {
            neighbourIndex.push(idx);
            idx = currConnected.indexOf(1, idx + 1);
        }

        for (var j = 0; j < neighbourIndex.length; j++) {
            if (nodeLen[neighbourIndex[j]] == Infinity) {
                nodeLen[neighbourIndex[j]] = nodeLen[current] + 1;
                queue.push(neighbourIndex[j]);
            }
        }
    }
    return nodeLen;
}

var exBFSGraph = [
    [
        0, 1, 1, 1, 0
    ],
    [
        0, 0, 1, 0, 0
    ],
    [
        1, 1, 0, 0, 0
    ],
    [
        0, 0, 0, 1, 0
    ],
    [0, 1, 0, 0, 0]
]

console.log(bfs(exBFSGraph, 1));