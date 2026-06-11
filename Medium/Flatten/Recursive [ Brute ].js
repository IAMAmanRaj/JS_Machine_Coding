export default function flatten(value) {
  const result = [];
  for (const item of value) {
    if (!Array.isArray(item)) result.push(item);
    else result.push(...flatten(item));
  }

  return result;
}

// T.C : O(N) typical, O(N²) worst-case due to repeated copying
// S.C : O(N + D) where D is maximum nesting depth