function whatCentury (year) {
  let y = Number(year);
  let c = Math.ceil(y / 100);
  let s = 'th';
  if (c % 10 === 1 && c % 100 !== 11) s = 'st';
  else if (c % 10 === 2 && c % 100 !== 12) s = 'nd';
  else if (c % 10 === 3 && c % 100 !== 13) s = 'rd';
  return c + s;
}
