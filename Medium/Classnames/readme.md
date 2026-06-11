## Implement classNames(...args)

- Build a utility function that accepts any number of arguments and returns a space-separated string of CSS class names.

## Supported Argument Types

- string → included in the result.
- number → included in the result (except falsy values like 0).
- Array → recursively flattened and processed.
- Object → keys with truthy values are included.
- Falsy values (false, null, undefined, 0, '', NaN) are ignored.

## Returns

- (string): A space-separated string containing all valid class names.

## Notes

- The reason why T.C for pure recursive solution goes to O(N^2) is due to repeated string reconstruction across recursive joins. We call `join(" ")` at every level of the array nesting. This also increases the S.C. as it occupies some extra heap space due to string creation and holding.

- T.C : O(N) , S.C : O(N)

- The optimal solution uses a recursive helper function (classNamesImpl) to process nested arrays of arbitrary depth.
- When an array is encountered, the helper function calls itself recursively to process each nested element.
- For objects, each key is examined and is added to the result if everything seems right ( not inherited and it's corresponding value is truthy )
- Object.hasOwn() prevents inherited properties from the prototype chain from being included.
