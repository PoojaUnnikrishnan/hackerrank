function sparseArray(string, queries) {
  result = [];
  for (let q = 0; q < queries.length; q++) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (queries[q] === string[i]) {
        count = count + 1;
      }
    }
    result.push(count);
  }
  console.log(result);
  return result;
}
sparseArray(["ab", "ab", "abc"], ["ab", "abc", "bc"]);
