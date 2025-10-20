function primeFactors(n) {
  let r = "";      
  let a = 2;
  while (n > 1)
 {
    let b = 0;      
    while (n % a === 0)
 {
      n = n / a;
      b = b + 1;
    }
    if (b > 0) {
      if (b === 1)
 {
        r = r + "(" + a + ")";
      } else {
        r = r + "(" + a + "**" + b + ")";
      }
    }
    a = a + 1;
  }
  return r;
}
