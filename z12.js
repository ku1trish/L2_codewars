function longest(arr, n) {
  let array = [];
  for (let i = 0; i < arr.length; i++)
  {
    let item = 
    {
      t: arr[i],           
      l: arr[i].length,    
      i: i                 
    };
    array.push(item);      
  }
  array.sort(function(a, b) {
    if (a.l < b.l) 
    {
      return 1;
    } else if (a.l > b.l)
    {
      return -1;
    } else {
      return a.i - b.i;
    }
  });
  return array[n - 1].t;
}

