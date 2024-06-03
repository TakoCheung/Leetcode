let n;
let c;
let ret = [];

function setN(value) {
  cleanUp()
  n = value;
}

function cleanUp(){
  ret = []
}

function setC(value) {
  cleanUp()
  c = value;
}

function backtrack(idx, comb) {
  if (idx === c.length) {
    ret.push(comb);
    return;
  }

  for (const letter of n[c[idx]]) {
    backtrack(idx + 1, comb + letter);
  }
  return ret
}

function getCombinations(arr, k) {
  let combinations = [];
  
  function helper(start, combo) {
    if (combo.length === k) {
      combinations.push([...combo]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  }

  helper(0, []);
  return combinations;
}

module.exports = {
  backtrack: backtrack,
  setN: setN,
  setC: setC,
  getCombinations: getCombinations
};
