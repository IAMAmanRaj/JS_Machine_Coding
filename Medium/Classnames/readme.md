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

- The solution uses a recursive helper function (classNamesImpl) to process nested arrays of arbitrary depth.
- When an array is encountered, the helper function calls itself recursively to process each nested element.
- For objects, each key is examined and is added to the result if everything seems right ( not inherited and it's corresponding value is truthy )
- Object.hasOwn() prevents inherited properties from the prototype chain from being included.
