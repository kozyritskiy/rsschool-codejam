module.exports = function recursion(tree) {
  const resArr = [];

  function bfs(node, resArr, i) {
    resArr[i] = resArr[i] || [];
    resArr[i].push(node.value);

    if (node.left !== undefined) bfs(node.left, resArr, i + 1);
    if (node.right !== undefined) bfs(node.right, resArr, i + 1);
  }

  bfs(tree, resArr, 0);

  return resArr;
};
