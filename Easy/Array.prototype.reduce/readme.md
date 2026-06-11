## Implement Array.prototype.reduce

- The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array

## Usage

- reduce(callbackFn)
- reduce(callbackFn, initialValue)

## Examples

- `[1, 2, 3].myReduce((prev, curr) => prev + curr, 0);` // 6
- `[1, 2, 3].myReduce((prev, curr) => prev + curr, 4);` // 10

### Most iterative array methods (map, filter, find, some, every, etc.) call the callback with:

- (element, index, array)

### But reduce() is special because its job is to accumulate a result across iterations ( i.e. carry a result from one iteration to the next )

## Reducer callback function signature

- (accumulator, currentValue, currentIndex, array)

## Parameters

- accumulator: The value returned from the previous callback execution.
- currentValue: The current array element being processed.
- currentIndex: The index of the current element.
- array: The array on which reduce() was called.

### More about the callback function

- A function to execute for each element in the array.
- Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn.

- For the last invocation, the return value becomes the return value of reduce().

### Since, this is an implementation of reduce method on Array instances so under normal usage, `this` will be an array.

### However, JavaScript methods can be called with an arbitrary this value using `call`, `apply`, or `bind`, for example :

`Array.prototype.myReduce.call({ 0: "a", 1: "b", length: 2 },(acc, cur) => acc + cur,"");`

- here, obj is not an array but an array-like object with indexed properties.

### Also, callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

- This is why the native Array.prototype.reduce algorithm generally works with array-like objects ( like the one above or "hello" or etc...), not just arrays.
