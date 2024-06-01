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

module.exports = {
  backtrack: backtrack,
  setN: setN,
  setC: setC
};
