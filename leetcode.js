// var Node = function (val) {
//     this.left = null;
//     this.right = null;
//     this.val = val;
// };

// let root = new Node("5");
// root.left = new Node("4");
// root.right = new Node("8");
// root.left.left = new Node("11");
// root.left.left.left = new Node("null");
// root.left.left.right = new Node("null");
// root.left.right = new Node("null");

// var hasPathSum = function (root, sum) {
//     if (!root) return false;
//     if (root.val === sum && !root.left && !root.right) return true;
//     return (
//         hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
//     );
// };

// console.log(hasPathSum(root, 20));

var generate = function (numRows = 5) {
    const table = [];
    for (let i = 0; i < numRows; i++) {
        table[i] = []; //table 안에 [0] ==
        table[i][0] = 1;
        for (let j = 1; j < i; j++) {
            table[i][j] = table[i - 1][j - 1] + table[i - 1][j];
        }
        table[i][i] = 1;
    }
    console.log(table);
};
