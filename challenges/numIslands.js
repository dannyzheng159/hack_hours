/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

/* Recursive DFS/Backtracing Approach:
   Check if adjacent cells near current node visited are lands. If they are not, we backtrack and return to the nested for-loop to check other cells and repeat the process
   O(n*m) time complexity - n for number of rows and m for number of columns. At worse, we need to traverse through every cell in the grid
   O(1) space complexity - constant space allocated for variables, modifying the original grid
*/
const numIslands = (grid) => {
  // declare rows, cols, and islands
  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  // declare recursive helper function
  const dfs = (i, j) => {
    // reassign current cell to 0 to mark as visited
    grid[i][j] = 0;
    // check the current position and check if there exists a land above, below, to the left, and to the right of the current cell and recursively invoke dfs passing in the new coordinates
    if (i > 0 && grid[i - 1][j]) dfs(i - 1, j);
    if (i < rows - 1 && grid[i + 1][j]) dfs(i + 1, j);
    if (j > 0 && grid[i][j - 1]) dfs(i, j - 1);
    if (j < cols - 1 && grid[i][j + 1]) dfs(i, j + 1);
  };

  // iterate through each cell in grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // check if the current cell is truthy or equal to 1
      if (grid[i][j]) {
        // if so, invoke dfs passing in the current coordinates
        dfs(i, j);
        // increment islands by 1
        islands++;
      }
    }
  }
  return islands;
};

console.log(
  numIslands([
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // -> 1

console.log(
  numIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
); // -> 3

