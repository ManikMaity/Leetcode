function printAllDivisors (N) {
  
    // Brute forse approch
  //  let sum = 0;
  //         for (let i = 1; i <= N; i++){
  //             if (N%i === 0){
  //               console.log(i);
  //                 sum+= i;
  //             }
  //         }
          
  //       return sum; 
    
    // Optimized approch
    for (let i = 0; i <= Math.sqrt(N); i++){
      if (N%i === 0){
        console.log(i);
        if (i !== N/i) console.log(N/i);
      }
    }
    
    
  }
  
  printAllDivisors(36);