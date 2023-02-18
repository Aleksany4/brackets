module.exports = function check(str, bracketsConfig) {
  const open = ['(', '[', '{', '1', '3', '5'];
  const openPair = ['|', '7', '8']
  const pair = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
  };

 let stack = [];
 for (let i = 0; i < str.length; i++) {
  let currentSymbol = str[i];
  let topEl = stack[stack.length - 1];
  if(open.includes(currentSymbol)) {
    stack.push(currentSymbol);
  } else if(openPair.includes(currentSymbol)){
    stack.push(currentSymbol); {
      if(topEl === currentSymbol){
        stack.pop()
        stack.pop()
      }
    }
  }
  else {
    if (stack.length === 0) {
      return false;
    }
    if (pair[currentSymbol] === topEl) {
      stack.pop();
    } else {
      return false;
    }
  }
 }
return stack.length === 0;
}
