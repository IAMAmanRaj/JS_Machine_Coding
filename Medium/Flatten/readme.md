## Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

## Supported Input

- Primitive values → included in the result.
- Arrays → recursively traversed and flattened.
- Arrays can be nested to any depth.
- The original array should not be modified.

## Returns

- (Array): A new single-dimensional array containing all elements from the input array in their original order.

### Notes

- The solution uses a recursive helper function to traverse nested arrays of arbitrary depth.
- The recursive calls continue until a non-array value is reached, which acts as the base case.

## Gotchas :

- The recursive solution ( Brute ) can cause `Maximum Call Stack Size Exceeded` for very deeply nested arrays.
- Queue ( shift() / unshift()) are generally O(N) operations because all remaining elements must be re-indexed and it can significantly degrade performance for large arrays.
- That's why Stack Based - iterative solution is preferred since it avoids `stack overflow`.
