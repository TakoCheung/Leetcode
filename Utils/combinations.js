function backtrack(n, c) {
  let ret = []
  function helper(idx, comb) {
    if (idx === c.length) {
      ret.push(comb);
      return;
    }

    for (const letter of n[c[idx]]) {
      helper(idx + 1, comb + letter);
    }
  }
  helper(0,[])
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
  getCombinations: getCombinations
};
