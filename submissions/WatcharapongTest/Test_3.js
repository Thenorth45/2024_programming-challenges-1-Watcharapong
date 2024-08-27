function dijkstra(edges, start, end) {
    const graph = {};
    edges.forEach(([u, v, w]) => {
        if (!graph[u]) graph[u] = [];
        if (!graph[v]) graph[v] = [];
        graph[u].push({ node: v, weight: w });
        graph[v].push({ node: u, weight: w });
    });

    const pq = new PriorityQueue();
    pq.enqueue(start, 0);
    const distances = {};
    distances[start] = 0;

    while (!pq.isEmpty()) {
        const { element: currentNode, priority: currentDistance } = pq.dequeue();

        if (currentNode === end) return currentDistance;

        if (currentDistance > distances[currentNode]) continue;

        (graph[currentNode] || []).forEach(({ node: neighbor, weight }) => {
            const distance = currentDistance + weight;

            if (distance < (distances[neighbor] || Infinity)) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        });
    }

    return Infinity;
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        this.items.push({ element, priority });
        this.items.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

//ใส่จุดกราฟที่ต้องการ
const edges = [
    [1, 2, 1],
    [2, 3, 2],
    [1, 3, 4],
    [3, 4, 1]
];
const start = 1;
const end = 4;
console.log(dijkstra(edges, start, end));