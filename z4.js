function findMissing(list) {
  let d1 = list[1] - list[0];
  let d2 = list[2] - list[1];
  let d = d1 === d2 ? d1 : (d1 === list[2] - list[0] / 2 ? d1 : d2);
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] !== list[i] + d) {
      return list[i] + d;
    }
  }
  return list[0]; 
}
