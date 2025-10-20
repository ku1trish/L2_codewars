function ipv4Parser(ip, mask) {
  let c = ip.split('.').map(Number);
  let d = mask.split('.').map(Number);
  let e = [];
  let f = [];
  for (let i = 0; i < 4; i++) {
    let g = c[i] & d[i];
    let h = c[i] & (~d[i] & 255);
    e.push(g);
    f.push(h);
  }
  let j = e.join('.');
  let k = f.join('.');
  return [j, k];
}
console.log(ipv4Parser("192.168.2.1", "255.255.255.0"));
