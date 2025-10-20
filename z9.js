function solution(str) {
  let result = []; 
  if (str.length % 2 !== 0) 
{
    str = str + "_";
  }
  for (let i = 0; i < str.length; i = i + 2) 
{
    let p = str[i] + str[i + 1]; 
    result.push(p);              
  }
  return result;
}
