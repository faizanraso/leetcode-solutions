function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
      let left = 0;
      let right = matrix[i].length - 1;
      while (left <= right) {
        let center = Math.floor((right + left) / 2);
        if (matrix[i][center] == target) return true;
        if (matrix[i][center] < target) left = center + 1;
        else if (matrix[i][center] > target) right = center - 1;
      }
    }
  }
  return false;
}
