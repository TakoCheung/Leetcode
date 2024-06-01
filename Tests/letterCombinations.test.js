const letterCombinations = require('../Solutions/letterCombinations')

test('digit: [2,3]', ()=>{
  const digit = [2,3]
  expect(letterCombinations(digit)).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
})

test('digit: [2,3,4,5]', ()=>{
  const digit = [2,3,4,5]
  expect(letterCombinations(digit)).toEqual(["adgj","adgk","adgl","adhj","adhk","adhl","adij","adik","adil","aegj","aegk","aegl","aehj","aehk","aehl","aeij","aeik","aeil","afgj","afgk","afgl","afhj","afhk","afhl","afij","afik","afil","bdgj","bdgk","bdgl","bdhj","bdhk","bdhl","bdij","bdik","bdil","begj","begk","begl","behj","behk","behl","beij","beik","beil","bfgj","bfgk","bfgl","bfhj","bfhk","bfhl","bfij","bfik","bfil","cdgj","cdgk","cdgl","cdhj","cdhk","cdhl","cdij","cdik","cdil","cegj","cegk","cegl","cehj","cehk","cehl","ceij","ceik","ceil","cfgj","cfgk","cfgl","cfhj","cfhk","cfhl","cfij","cfik","cfil"]);
})

test('digit: [9]', ()=>{
  const digit = [9]
  expect(letterCombinations(digit)).toEqual(["w","x","y","z"]);
})