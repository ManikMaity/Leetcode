function rotate(matrix: number[][]) {
    const result : number[][] = [];
    const length = matrix.length;
    if (length == 1){
      return;
    }
    for (let i = 0; i < matrix.length; i++){
      let line:number[] = [];
      for (let j = matrix.length - 1; j >= 0; j--){
        line.push(matrix[j][i]);
      }
      result.push(line);
    }
    
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length; j++) {
          matrix[i][j] = result[i][j];
      }
  }
    
};