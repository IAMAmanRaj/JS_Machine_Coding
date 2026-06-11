export default function flatten(value) {
  const result = [];
  const copy = value.slice();
  while (copy.length) {
    const curr = copy.shift();
    if (!Array.isArray(curr)) result.push(curr);
    else copy.unshift(...curr);
  }

  return result;
}

// T.C : O(N²)
// S.C : O(N)
