export default function flatten(value) {
  const stack = [...value];
  const result = [];
  while (stack.length) {
    const curr = stack.pop();
    if (Array.isArray(curr)) {
      stack.push(...curr);
    } else result.push(curr);
  }

  return result.reverse();
}

// T.C : O(N)
// S.C : O(N)
