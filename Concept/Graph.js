const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

const adjecencyList = new Map();
const addNode = (node) => {
  adjecencyList.set(node, []);
};

const addEdge = (node1, node2) => {
  adjecencyList.get(node1).push(node2);
  adjecencyList.get(node2).push(node1);
};

airports.forEach(addNode);
routes.forEach((route) => addEdge(route[0], route[1]));

console.log(adjecencyList);

const visitedArray = new Set();
const queue = [];

const bfs = (start) => {
  queue.push(start);
  visitedArray.add(start);
  while (queue.length != 0) {
    const currNode = queue.shift();
    console.log(currNode);
    for (var i = 0; i < adjecencyList.get(currNode).length; i++) {
      if (!visitedArray.has(adjecencyList.get(currNode)[i])) {
        visitedArray.add(adjecencyList.get(currNode)[i]);
        queue.push(adjecencyList.get(currNode)[i])
      }
    }
  }
};



bfs('PHX')
