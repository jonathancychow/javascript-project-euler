export function isPrimeNumber(N){
  if (typeof(N)==='number'){
    // console.log('print')
    if (N===2 || N===3){
      return true;
    }else if(N % 2 === 0 || N < 2){
      return false;
    }
    let upperLimit = Math.floor(N**0.5)+1;
    for(let i=3; i < upperLimit;  i++){
      if (N % i === 0 ){
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
  
}