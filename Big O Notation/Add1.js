function addNum(n) {
  let result = 0;
  for(let i = 0; i <= n; i++){
    result += i;
  }
  return result;
}

console.log(addNum(6));