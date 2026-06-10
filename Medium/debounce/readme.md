## Implement debounce(func, wait) so that func is called only after wait milliseconds have passed since the most recent call

## Additional Instructions
- The returned function should not invoke func immediately. 
- When the delayed call finally runs, it should use the latest arguments and preserve the this value from the most recent call.

## Arguments
- func (Function): The callback to debounce.
- wait (number): The number of milliseconds to wait after the latest call.

## Returns
- (Function): Returns the debounced function.


## Notes
- Here we are just implementing the higher order function `debounce` which returns a new function that wraps the original callback. We can call this returned function as the wrapper.
- This wrapper function controls when `func` gets executed.
- So, while using this implementation we store the returned wrapper function like this :

`const debouncedFn = debounce(cb, 300);`

- To get the debouncing behavior, call the returned debounced function stored in (`debouncedFn`) instead of invoking the original callback (`cb`) directly.
 