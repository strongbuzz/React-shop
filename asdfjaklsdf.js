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

var longestPalindrome = function (s = "babad") {
    let len = s.length;
    while (len > 0) {
        for (let i = 0; i < s.length - len + 1; i++) {
            let str = s.slice(i, i + len);
            if (isPalindrom(str)) return str;
        }
        len--;
    }
    return "";
};

const isPalindrom = function (arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (arr[i] !== arr[j]) return false;
        i++;
        j--;
    }
    return true;
};
