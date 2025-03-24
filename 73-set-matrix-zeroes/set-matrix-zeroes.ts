function setZeroes (matrix : number[][] ){
    const raws = new Map();
    const cells  = new Map();
    for (let i =0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] == 0){
                if (!raws.has(i)){
                    raws.set(i, true);
                }
                if (!cells.has(j)){
                    cells.set(j, true);
                }
            }
        }
    }

   for (let i = 0; i < matrix.length; i++){
        if (raws.get(i)){
            for (let j = 0; j < matrix[i].length; j++){
                matrix[i][j] = 0;
            }
        }
        else {
            for (let j = 0; j < matrix[i].length; j++){
                if (cells.get(j)){
                    matrix[i][j] = 0;
                }
            }
        }
   }

   return matrix;
}